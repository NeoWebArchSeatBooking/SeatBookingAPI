import config from "config";
import { koaSwagger } from "koa2-swagger-ui";
import { createKoaServer } from "routing-controllers";
import { sbConnector } from "./helpers/DBProvider";
import { logger } from "./helpers/Logger";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import { BookingRouter, InfraRouter } from "./routers";
const yamljs = require("yamljs"); // eslint-disable-line  @typescript-eslint/no-var-requires
const spec = yamljs.load("./swagger-doc/swagger.yaml");

sbConnector.authenticate().catch((err) => {
  logger.error(err);
  process.exit(1);
});

const cors = {
  origin: "*",
  maxAge: "600",
  allowMethods: ["GET", "POST", "DELETE", "PATCH", "OPTION"],
  allowHeaders: ["authorization", "content-type", "test"],
};
const port = process.env.APP_PORT || config.get("app.port");
export const app = createKoaServer({
  cors,
  routePrefix: config.get("app.prefix"),
  controllers: [InfraRouter, BookingRouter],
  middlewares: [AuthMiddleware],
});

app.use(
  koaSwagger({
    routePrefix: config.get("app.docs"),
    swaggerOptions: { spec },
  })
);

app.listen(port, () => {
  logger.info(`server started and listening at ${port}`);
});
