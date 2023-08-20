import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  QueryParam,
  QueryParams,
} from "routing-controllers";
import { AppError } from "../errors/AppErrors";
import { ResponseHelper,Validator } from "../helpers";
import {
  BaseResponse,
  SeatBookRequest,
  BookedSeatResponse
} from "../models";
import { bookingService } from "../services/SeatBookingService";
import { UserSeatRequest } from "../models/req/UserSeatsRequest";

@Controller("/users")
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

  @Patch("/seats")
  public async cancelBookingInfo(
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
      await bookingService.bookASeat(req);
      ResponseHelper.setSuccessResponse(response);
    } catch (err) {
      ResponseHelper.setFailureResponse(response, err as AppError);
    }
    return response;
  }
}
