import { Controller, Get, QueryParams } from "routing-controllers";
import { ResponseHelper } from "../helpers";
import { UserRequest, BookingResponse, SeatingRequest } from "../models";
import { bookingService } from "../services/BookingService"
import { SeatingResponse } from "../models/resp/SeatingResponse";
import { AppError } from "../errors/AppErrors";

@Controller()
export class BookingRouter {

  @Get("/seats")
  public async getBookingInfo(
    @QueryParams() req: UserRequest
  ): Promise<BookingResponse> {
    const response = new BookingResponse();
    response.items = await bookingService.getBookingInfo(req.userId);
    ResponseHelper.setSuccessResponse(response);
    return response;
  }

  @Get("/facilities/seats")
  public async getAvailableSeat(
    @QueryParams() req: SeatingRequest
  ): Promise<SeatingResponse> {
    const response = new SeatingResponse();
    try {
      response.seats = await bookingService.getAvailableSeats(req);
      ResponseHelper.setSuccessResponse(response);
    } catch (err) {
      ResponseHelper.setFailureResponse(response,err as AppError);
    }
    return response;
  }
}
