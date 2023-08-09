import { Controller, Get, QueryParams } from "routing-controllers";
import { ResponseHelper } from "../helpers";
import { UserRequest, BookingResponse, SeatingRequest } from "../models";
import { bookingService } from "../services/BookingService"
import { SeatingResponse } from "../models/resp/SeatingResponse";

@Controller()
export class BookingRouter {

  @Get("/booking")
  public async getBookingInfo(
    @QueryParams() req: UserRequest
  ): Promise<BookingResponse> {
    const response = new BookingResponse();
    response.items = await bookingService.getBookingInfo(req.userId);
    ResponseHelper.setSuccessResponse(response);
    return response;
  }

  @Get("/available-seats")
  public async getAvailableSeat(
    @QueryParams() req: SeatingRequest
  ): Promise<SeatingResponse> {
    const response = new SeatingResponse();
    try {
      response.seats = await bookingService.getAvailableSeats(req);
      ResponseHelper.setSuccessResponse(response);
    } catch (err) {
      ResponseHelper.setFailureResponse(response,err);
    }
    return response;
  }
}
