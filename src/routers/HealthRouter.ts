import { Controller, Get } from "routing-controllers";


@Controller()
export class HealthRouter {
  @Get("/health")
  public async getHealth(
  ): Promise<String> {
    return "200 Sucess";
  }

  
}
