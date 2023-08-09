import { createKoaServer } from "routing-controllers";
import { HealthRouter, InfraRouter, BookingRouter } from "./routers";
import { sbConnector } from "./helpers/DBProvider";
const yamljs = require('yamljs');
import {koaSwagger} from 'koa2-swagger-ui';

const spec = yamljs.load('./swagger-doc/swagger.yaml')

sbConnector.authenticate().then((val)=>{
  console.log("DB Connected")
}).catch((err)=>{
  console.error(err)
  process.exit(1)
})

const port = process.env.APP_PORT || 3000;
const app = createKoaServer({
  routePrefix: "/seat-booking",
  controllers: [HealthRouter, InfraRouter,BookingRouter],
});

app.use(koaSwagger({routePrefix:false,swaggerOptions: { spec }}))

app.listen(port, () => {
  console.log(`server started and listening at ${port}`);
});
