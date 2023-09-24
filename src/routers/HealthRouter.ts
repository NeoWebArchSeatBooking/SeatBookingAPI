import { Controller, Get } from "routing-controllers";
import { BaseResponse } from "../models";
import { ResponseHelper } from "../helpers";


@Controller()
export class HealthRouter {
  @Get("/health")
  public async getHealth(
  ): Promise<BaseResponse> {
    const response = new BaseResponse()
    ResponseHelper.setSuccessResponse(response)
    return response;
  }

  
}
