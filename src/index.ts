import { createKoaServer } from "routing-controllers";
import { HealthRouter, InfraRouter, BookingRouter } from "./routers";
import { sbConnector } from "./helpers/DBProvider";

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


app.listen(port, () => {
  console.log(`server started and listening at ${port}`);
});
