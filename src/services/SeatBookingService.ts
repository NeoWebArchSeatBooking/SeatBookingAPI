import { bookingDataAccess } from "../dataaccess/BookingDataAccess";
import { infraDataAccess } from "../dataaccess/InfraDataAccess";
import { ConflictError, NotFoundError } from "../errors/AppErrors";
import { AppHelper, FilterHelper } from "../helpers";
import { Constants } from "../helpers/Constants";
import { logger } from "../helpers/Logger";
import {
  SeatInformation,
  Booking,
  SeatBookRequest,
  SeatInfo,
  SeatSearchRequest,
  SearchSearchInfo,
  CancelRequest,
  UserSeatRequest
} from "../models";
import { BookingModel } from "../models/database/Booking";
const cls = {class : "SeatBookingService"}

class SeatBookingService {

  public async getBookedSeats(userReq: UserSeatRequest): Promise<SearchSearchInfo> {
    const searchInfo = new SearchSearchInfo()
    if(userReq.role === Constants.ROLE_ADMIN && userReq.viewRole === Constants.ROLE_ADMIN){
      logger.debug(cls,"get booked seats for admin")
      const { bookingSeats, count } = await bookingDataAccess.getBookedSeatsByReq(userReq,userReq.offset,userReq.limit);
      searchInfo.total = count
      searchInfo.items = this.mapToBooking(bookingSeats);      
    }else{
      logger.debug(cls,"get booked seats for user")
      const { bookingSeats, count }  = await bookingDataAccess.getBookedSeatsByUser(userReq.userId,userReq.offset,userReq.limit,userReq.status);
      searchInfo.total = count
      searchInfo.items = this.mapToBooking(bookingSeats);       
    }
    return searchInfo
  }

  public async getAvailableSeats(req: SeatSearchRequest): Promise<SeatInfo[]> {
    logger.debug(cls,"get available seats")
    const seatDetails = await this.getInfraSeats(req);
    logger.debug(cls,"fetch booked seats for booking request")
    const bookings = await bookingDataAccess.getBookedSeatsByUserAndDate(
      req.userId,
      req.date,
      Constants.SEAT_STATUS_CDE_ACTIVE
    );
    if (bookings.length > 0){
      throw new ConflictError("You've already booked a seat on this date!");
    }
    const seats = await bookingDataAccess.getBookedSeatsByFacilities(req);
    const updatedSeatInfos: SeatInfo [] = []
    seatDetails.forEach((seatDet)=>{
      const mappedSeats = seatDet.seats.map((seat) => {
        const available = !seats.includes(seat.seatId);
        const seatInfo: SeatInfo = { available,
            locationId:seatDet.locationId,
            blockId:seatDet.blockId,
            floorId:seatDet.floorId,
            ...seat };
        return seatInfo;
      })
      updatedSeatInfos.push(...mappedSeats)
    });    
    return FilterHelper.applyAvailablityFilter(updatedSeatInfos,req.availability)
  }

  private async getInfraSeats(req: SeatSearchRequest) {
    logger.debug(cls,"validate facilities")
    const infras = await infraDataAccess.getInfra();
    const loc = infras.find((loc) => loc.locationId === req.locationId);
    if (loc === undefined) throw new NotFoundError("location");
    if(req.blockId){
      const block = loc.blocks?.find((block) => block.blockId === req.blockId);
      if (block === undefined) throw new NotFoundError("block");
      if(req.floorId){
        const floor = block.floors?.find((flr) => flr.floorId === req.floorId);
        if (floor === undefined) throw new NotFoundError("floor");
      }
    }
    logger.debug(cls,"fetch seats for facility request")
    const seatInfos = await infraDataAccess.getSeatsByFields(
      req.locationId,
      req.blockId,
      req.floorId
    );
    return seatInfos;
  }

  public async bookASeat(req: SeatBookRequest): Promise<void> {
    const seatInfos = await this.getInfraSeats(req);
    if(seatInfos.length !== 1){
      logger.info(cls,`mutliple seats founds`);
      throw new ConflictError("seat");
    }
    if (seatInfos[0].seats.findIndex((seat) => seat.seatId === req.seatId) === -1) {
      logger.info(cls,`seat ${req.seatId} not valid`);
      throw new NotFoundError("seat");
    }
    const seats = await bookingDataAccess.getBookedSeatsByFacilities(req);
    if (seats.findIndex((seat) => seat === req.seatId) > -1) {
      logger.info(cls,`seat ${req.seatId} not available to take`);
      throw new ConflictError("Seat not available now!, please choose some other seat");
    }
    await bookingDataAccess.createBooking(req);
  }

  private mapToBooking(models: BookingModel[]) {
    return models.map((bookingDS) => {
      const booking = new Booking();
      booking.bookingDate = AppHelper.reformateDate(bookingDS.bookingDate);
      booking.userId = bookingDS.bookingUserId;
      booking.bookingId = bookingDS.id;
      booking.status = AppHelper.getStatusTxt(bookingDS.bookingStatus);
      const seat = new SeatInformation();
      seat.locationId = bookingDS.bookingLocId;
      seat.blockId = bookingDS.bookingBlockId;
      seat.floorId = bookingDS.bookingFloorId;
      seat.seatId = bookingDS.bookingSeatId;
      booking.seatInformation = seat;
      return booking;
    });
  }

  public async cancelBookedSeat(cancelRequest: CancelRequest):Promise<void>{
    const bookedSeat = await bookingDataAccess.getBookedSeatById(cancelRequest.seatId)
    if(bookedSeat === null){
      logger.info(cls,`seat ${cancelRequest.seatId} not available to cancel`);
      throw new NotFoundError("Seat Id");
    }
    const isUpdated = await bookingDataAccess.updateSeatStatusById(
      cancelRequest.seatId,Constants.SEAT_STATUS_CDE_CANCEL)
    if(!isUpdated){
      logger.info(cls,`seat ${cancelRequest.seatId} cancelled`);
      throw new NotFoundError("seat id");
    }
  }
}

export const bookingService = new SeatBookingService();
