import { createKoaServer } from "routing-controllers";
import { HealthRouter, InfraRouter, BookingRouter } from "./routers";
import { sbConnector } from "./helpers/DBProvider";
import {koaSwagger} from 'koa2-swagger-ui';
import { AuthMiddleware } from "./middleware/AuthMiddleware";
const yamljs = require('yamljs'); // eslint-disable-line  @typescript-eslint/no-var-requires


const spec = yamljs.load('./swagger-doc/swagger.yaml')

sbConnector.authenticate().catch((err)=>{
  console.error(err)
  process.exit(1)
})

const port = process.env.APP_PORT || 4000;
const app = createKoaServer({
  routePrefix: "/v1/seat-management",
  controllers: [HealthRouter, InfraRouter,BookingRouter],
  middlewares:[AuthMiddleware]
});

app.use(koaSwagger({routePrefix:"/v1/seat-management/api-docs",swaggerOptions: { spec }}))

app.listen(port, () => {
  console.log(`server started and listening at ${port}`);
});
