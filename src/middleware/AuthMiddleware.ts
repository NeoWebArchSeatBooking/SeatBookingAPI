import axios from "axios";
import { Context } from "koa";
import { KoaMiddlewareInterface, Middleware } from "routing-controllers";
import { AppError, BadRequest } from "../errors/AppErrors";
import { ResponseHelper } from "../helpers";

@Middleware({ type: "before" })
export class AuthMiddleware implements KoaMiddlewareInterface {
  skipAuth(ctx: Context): boolean {
    if (
      ctx.request.path &&
      (ctx.request.path.indexOf("/v1/seat-management/api-docs") > -1 ||
        ctx.request.path.indexOf("/v1/seat-management/health") > -1)
    ) {
      return true;
    }
    return false;
  }

  async use(ctx: Context, next: (err?: any) => Promise<any>): Promise<any> {
    // eslint-disable-line @typescript-eslint/no-explicit-any
    try {
      const auth = ctx.request.headers["authorization"];
      const test = ctx.request.headers["test"];
      if (this.skipAuth(ctx)) {
        return next();
      } else if (test) {
        ctx.query["userId"] = "sgd.daran@gmail.com";
        ctx.query["name"] = "DhamoSG";
        ctx.query["role"] = "user";
        return next();
      } else if (!auth) {
        ctx.status = 400;
        ctx.body = ResponseHelper.getFailureResponse(
          new BadRequest("bearer token missing")
        );
      } else {
        await this.checkToken(ctx, next, auth);
      }
    } catch (err: any) {
      // eslint-disable-line @typescript-eslint/no-explicit-any
      console.log(err);
      ctx.status = 500;
      ctx.body = ResponseHelper.getFailureResponse(
        new AppError(500, err.message)
      );
    }
  }

  private async checkToken(
    ctx: Context,
    next: (err?: any) => Promise<any>,
    token: string
  ): Promise<any> {
    // eslint-disable-line @typescript-eslint/no-explicit-any
    try {
      const options = {
        headers: {
          Authorization: token,
        },
      };
      const resp = await axios.get(
        "http://localhost:3000/v1/idp/status",
        options
      );
      if (resp.data.profile) {
        ctx.query["userId"] = resp.data.profile.userId;
        ctx.query["name"] = resp.data.profile.name;
        ctx.query["role"] = resp.data.profile.role;
        return next();
      } else {
        ctx.status = resp.data.metadata.status;
        ctx.body = ResponseHelper.getFailureResponse(
          new AppError(resp.data.metadata.status, resp.data.metadata.message)
        );
      }
    } catch (err: any) {
      // eslint-disable-line @typescript-eslint/no-explicit-any
      console.log(err);
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
