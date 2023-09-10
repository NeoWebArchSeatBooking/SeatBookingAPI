import { Context } from "koa";
import { KoaMiddlewareInterface, Middleware } from "routing-controllers";
import { logger } from "../helpers/Logger";

@Middleware({ type: "before" })
export class LogMiddleware implements KoaMiddlewareInterface {

  async use(ctx: Context, next: (err?: any) => Promise<any>): Promise<any> {
      const request = `${ctx.request.method} ${ctx.request.path}?${ctx.request.querystring}`
      logger.info({request},'begin to process')
      const startDate = Date.now()
      await next();
      logger.info({sla: `${Date.now() - startDate} ms`, request},'completed')
  }

}
