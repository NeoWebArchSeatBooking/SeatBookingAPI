import { Controller, Get, QueryParams } from "routing-controllers";
import { ResponseHelper } from "../helpers";
import { UserRequest, InfraResponse } from "../models";
import { infraService} from "../services/InfraService"

@Controller()
export class InfraRouter {
  @Get("/infra-info")
  public async getInfra(
    @QueryParams() req: UserRequest
  ): Promise<InfraResponse> {
    const response = new InfraResponse(req.userId);
    response.infras = await infraService.getInfra(req.userId);
    ResponseHelper.setSuccessResponse(response);
    return response;
  }
}
