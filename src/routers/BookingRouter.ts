import { Controller, Get, QueryParams } from "routing-controllers";
import { ResponseHelper } from "../helpers";
import { UserRequest, BookingResponse } from "../models";
import { bookingService} from "../services/BookingService"

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
}
