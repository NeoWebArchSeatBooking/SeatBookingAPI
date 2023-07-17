import { Controller, Get } from "routing-controllers";
import { ResponseHelper } from "../helpers";
import { BaseResponse } from "../models";

@Controller()
export class HealthRouter {
  @Get("/health")
  public async getInfra(): Promise<BaseResponse> {
    const response = new BaseResponse();
    ResponseHelper.setSuccessResponse(response);
    return response;
  }
}
