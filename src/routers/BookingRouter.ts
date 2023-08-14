import {
  Body,
  Controller,
  Get,
  Post,
  QueryParam,
  QueryParams,
} from "routing-controllers";
import { AppError } from "../errors/AppErrors";
import { ResponseHelper } from "../helpers";
import {
  BaseResponse,
  BookingRequest,
  BookingResponse,
  SeatingRequest,
} from "../models";
import { SeatingResponse } from "../models/resp/SeatingResponse";
import { bookingService } from "../services/SeatBookingService";

@Controller()
export class BookingRouter {
  @Get("/seats")
  public async getBookingInfo(
    @QueryParam("userId") userId: string
  ): Promise<BookingResponse> {
    const response = new BookingResponse();
    try {
      response.items = await bookingService.getBookedSeats(userId);
      ResponseHelper.setSuccessResponse(response);
    } catch (err) {
      ResponseHelper.setFailureResponse(response, err as AppError);
    }
    return response;
  }

  @Get("/facilities/seats")
  public async getAvailableSeat(
    @QueryParam("userId") userId: string,
    @QueryParam("role") role: string,
    @QueryParams() req: SeatingRequest
  ): Promise<SeatingResponse> {
    req.userId = userId;
    req.role = role;
    const response = new SeatingResponse();
    try {
      response.seats = await bookingService.getAvailableSeats(req);
      ResponseHelper.setSuccessResponse(response);
    } catch (err) {
      ResponseHelper.setFailureResponse(response, err as AppError);
    }
    return response;
  }

  @Post("/facilities/seats")
  public async reserveSeat(
    @QueryParam("userId") userId: string,
    @QueryParam("role") role: string,
    @Body() req: BookingRequest
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
