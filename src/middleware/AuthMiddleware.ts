import axios from "axios";
import config from "config";
import { Context } from "koa";
import { set } from "lodash";
import { KoaMiddlewareInterface, Middleware } from "routing-controllers";
import { AppError, BadRequest } from "../errors/AppErrors";
import { ResponseHelper } from "../helpers";
import { logger } from "../helpers/Logger";
import { BaseResponse } from "../models";

@Middleware({ type: "before" })
export class AuthMiddleware implements KoaMiddlewareInterface {
  skipAuth(ctx: Context): boolean {
    return ctx.request.path.indexOf("/api-docs") > -1;
  }

  setRequest(ctx: Context, data?: any) {
    set(ctx.request.query, "userId", data?.userId ?? "sgd.daran@gmail.com");
    set(ctx.request.query, "name", data?.name ?? "DhamoSG");
    set(ctx.request.query, "role", data?.role ?? "admin");
  }

  async use(ctx: Context, next: (err?: any) => Promise<any>): Promise<any> {
    try {
      const auth = ctx.request.headers["authorization"];
      const test = ctx.request.headers["test"];
      if (this.skipAuth(ctx)) {
        await next();
      } else if (test) {
        logger.debug("mock request");
        this.setRequest(ctx);
        await next();
        this.setStatus(ctx)
      } else if (!auth) {
        ctx.status = 400;
        ctx.body = ResponseHelper.getFailureResponse(
          new BadRequest("bearer token missing")
        );
      } else {
        logger.debug("request flows through IDP provider");
        await this.checkToken(ctx, next, auth);
      }
    } catch (err: any) {
      logger.error(err);
      ctx.status = 500;
      ctx.body = ResponseHelper.getFailureResponse(
        new AppError(500, err.message)
      );
    }
  }

  private async setStatus(ctx: Context){
    if(ctx.body && (ctx.body as any)['_meta']){
      logger.info("setting http status code as response status");
      ctx.status = (ctx.body as any)['_meta']['status']
    }
  }

  private async checkToken(
    ctx: Context,
    next: (err?: any) => Promise<any>,
    token: string
  ): Promise<any> {
    try {
      const options = {
        headers: {
          Authorization: token,
        },
      };
      const resp = await axios.get(config.get("clients.idp"), options);
      if (resp.data.profile) {
        this.setRequest(ctx);
        await next();
        this.setStatus(ctx)
      } else {
        ctx.status = resp.data.metadata.status;
        ctx.body = ResponseHelper.getFailureResponse(
          new AppError(resp.data.metadata.status, resp.data.metadata.message)
        );
      }
    } catch (err: any) {
      logger.error(err);
      if (err instanceof axios.AxiosError) {
        ctx.status = err.response?.status ?? 500;
        ctx.body = ResponseHelper.getFailureResponse(
          new AppError(
            ctx.status,
            `${err.message} from authentication provider`
          )
        );
      } else {
        ctx.status = 500;
        ctx.body = ResponseHelper.getFailureResponse(
          new AppError(500, err.message)
        );
      }
    }
  }
}
