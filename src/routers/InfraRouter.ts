import { Controller, Get, QueryParams } from "routing-controllers";
import { ResponseHelper } from "../helpers";
import { InfraRequest, InfraResponse } from "../models/Infrastructure";

@Controller()
export class InfraRouter {
  @Get("/infra")
  public async getInfra(
    @QueryParams() req: InfraRequest
  ): Promise<InfraResponse> {
    const response = new InfraResponse(req.userId);
    //TODO validation
    //TODO fetch information
    ResponseHelper.setSuccessResponse(response);
    return response;
  }
}
