import { Controller, Get, HeaderParam, QueryParam, QueryParams } from "routing-controllers";
import { ResponseHelper, Validator } from "../helpers";
import { InfraResponse, SeatSearchRequest, SeatingResponse } from "../models";
import { infraService} from "../services/InfraService"
import { bookingService } from "../services/SeatBookingService";
import { AppError } from "../errors/AppErrors";

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

  @Get("/facilities/seats")
  public async getAvailableSeat(
    @QueryParam("userId") userId: string,
    @QueryParam("role") role: string,
    @QueryParams() req: SeatSearchRequest
  ): Promise<SeatingResponse> {
    req.userId = userId;
    req.role = role;
    const response = new SeatingResponse();
    try {
      await Validator.validateSeatSearchRequest(req)
      response.seats = await bookingService.getAvailableSeats(req);
      ResponseHelper.setSuccessResponse(response);
    } catch (err) {
      ResponseHelper.setFailureResponse(response, err as AppError);
    }
    return response;
  }
}
