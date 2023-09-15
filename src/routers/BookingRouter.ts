import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  QueryParam,
  QueryParams,
  Param
} from "routing-controllers";
import { AppError } from "../errors/AppErrors";
import { ResponseHelper,Validator } from "../helpers";
import {
  BaseResponse,
  SeatBookRequest,
  BookedSeatResponse,
} from "../models";
import { bookingService } from "../services/SeatBookingService";
import { UserSeatRequest } from "../models/req/UserSeatsRequest";
import { CancelRequest } from "../models/req/CancelRequest";

@Controller("/booking")
export class BookingRouter {
  
  @Get("/seats")
  public async getBookingInfo(
    @QueryParams() userSeatRequest: UserSeatRequest
  ): Promise<BookedSeatResponse> {
    const response = new BookedSeatResponse();
    try {
      await Validator.validateUserSeatRequest(userSeatRequest)
      const {items,total} = await bookingService.getBookedSeats(userSeatRequest);
      ResponseHelper.setSuccessResponse(response,userSeatRequest);
      response.items = items
      response._meta.total = total
    } catch (err) {
      ResponseHelper.setFailureResponse(response, err as AppError);
    }
    return response;
  }

  @Patch("/seats/:seatId/cancel")
  public async cancelBookedSeat(
    @QueryParams() cancelRequest: CancelRequest,
    @Param('seatId') seatId: number
  ): Promise<BaseResponse> {
    const response = new BaseResponse();
    try {
      cancelRequest.seatId = seatId
      await Validator.validateCancelRequest(cancelRequest)
      await bookingService.cancelBookedSeat(cancelRequest);
      ResponseHelper.setSuccessResponse(response,cancelRequest);
    } catch (err) {
      ResponseHelper.setFailureResponse(response, err as AppError);
    }
    return response;
  }

  @Post("/seats")
  public async reserveSeat(
    @QueryParam("userId") userId: string,
    @QueryParam("role") role: string,
    @Body() req: SeatBookRequest
  ): Promise<BaseResponse> {
    req.userId = userId;
    req.role = role;
    const response = new BaseResponse();
    try {
      await Validator.validateSeatBookingRequest(req)
      await bookingService.bookASeat(req);
      ResponseHelper.setSuccessResponse(response);
    } catch (err) {
      ResponseHelper.setFailureResponse(response, err as AppError);
    }
    return response;
  }
}
