// this shim is required
import { createKoaServer } from "routing-controllers";
import { HealthRouter, InfraRouter } from "./routers";

const port = process.env.APP_PORT || 3000;
const app = createKoaServer({
  routePrefix: "/api",
  controllers: [HealthRouter, InfraRouter],
});

app.listen(port, () => {
  console.log(`server started and listening at ${port}`);
});
