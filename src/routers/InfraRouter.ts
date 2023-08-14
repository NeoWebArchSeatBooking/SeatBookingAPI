import { Controller, Get, HeaderParam, QueryParams } from "routing-controllers";
import { ResponseHelper } from "../helpers";
import { UserRequest, InfraResponse } from "../models";
import { infraService} from "../services/InfraService"

@Controller()
export class InfraRouter {
  @Get("/facilities")
  public async getInfra(
   @HeaderParam("userId") userId: string
  ): Promise<InfraResponse> {
    const response = new InfraResponse(userId);
    response.infras = await infraService.getInfra();
    ResponseHelper.setSuccessResponse(response);
    return response;
  }
}
