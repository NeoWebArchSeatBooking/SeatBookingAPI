import config from "config";
import { koaSwagger } from "koa2-swagger-ui";
import { createKoaServer } from "routing-controllers";
import { dbProvider, infraProvider } from "./dataaccess/providers";
import { logger } from "./helpers/Logger";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import { LogMiddleware } from "./middleware/LogMiddleware";
import { BookingRouter, HealthRouter, InfraRouter, PreferenceRouter } from "./routers";
const yamljs = require("yamljs"); // eslint-disable-line  @typescript-eslint/no-var-requires
const spec = yamljs.load("./swagger-doc/swagger.yaml");

if(process.env.CHECK_DB){
  dbProvider.isDBConnected().catch((err) => {
    logger.error(err);
    process.exit(1);
  });
  
  infraProvider.isProviderConnected().catch((err)=>{
    logger.error(err);
    process.exit(1);
  })
}

const cors = {
  origin: "*",
  maxAge: "600",
  allowMethods: "GET,POST,PATCH,OPTIONS",
  allowHeaders: "*",
};

const port = process.env.APP_PORT || config.get("app.port");
const app = createKoaServer({
  cors,
  routePrefix: config.get("app.prefix"),
  controllers: [HealthRouter,InfraRouter, BookingRouter, PreferenceRouter],
  middlewares: [LogMiddleware,AuthMiddleware],
  validation: false
});

app.use(
  koaSwagger({
    routePrefix: config.get("app.docs"),
    swaggerOptions: { spec },
  })
);

export const server = app.listen(port, () => {
  logger.info(`server started and listening at ${port}`);
});
