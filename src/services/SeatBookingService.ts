import { bookingDataAccess } from "../dataaccess/BookingDataAccess";
import { infraDataAccess } from "../dataaccess/InfraDataAccess";
import { ConflictError, NotFoundError } from "../errors/AppErrors";
import { AppHelper } from "../helpers";
import { logger } from "../helpers/Logger";
import {
  SeatInformation,
  Booking,
  SeatBookRequest,
  SeatInfo,
  SeatSearchRequest,
  SearchSearchInfo,
} from "../models";
import { BookingModel } from "../models/database/Booking";
import { UserSeatRequest } from "../models/req/UserSeatsRequest";

class SeatBookingService {

  public async getBookedSeats(userReq: UserSeatRequest): Promise<SearchSearchInfo> {
    const searchInfo = new SearchSearchInfo()
    if(userReq.role === 'admin' && userReq.view === 'admin'){
      const {bookingSeats, count } = await bookingDataAccess.getBookedSeatsByDate(userReq.fromDate,userReq.toDate,userReq.offset,userReq.limit);
      searchInfo.total = count
      searchInfo.items = this.mapToBooking(bookingSeats);      
    }else{
      const {bookingSeats, count }  = await bookingDataAccess.getBookedSeatsByUser(userReq.userId,userReq.offset,userReq.limit);
      searchInfo.total = count
      searchInfo.items = this.mapToBooking(bookingSeats);       
    }
    return searchInfo
  }

  public async getAvailableSeats(req: SeatSearchRequest): Promise<SeatInfo[]> {
    const seatInfos = await this.getInfraSeats(req);
    const seats = await bookingDataAccess.getBookedSeatsByFacilities(req);
    const updatedSeatInfos = seatInfos.seats.map((seat) => {
      const available = !seats.includes(seat.seatId);
      const seatInfo: SeatInfo = { available, ...seat };
      return seatInfo;
    });
    return updatedSeatInfos;
  }

  private async getInfraSeats(req: SeatSearchRequest) {
    const infras = await infraDataAccess.getInfra();
    const loc = infras.find((loc) => loc.locationId === req.locationId);
    if (loc === undefined) throw new NotFoundError("location");
    const block = loc.blocks?.find((block) => block.blockId === req.blockId);
    if (block === undefined) throw new NotFoundError("block");
    const floor = block.floors?.find((flr) => flr.floorId === req.floorId);
    if (floor === undefined) throw new NotFoundError("floor");

    const seatInfos = await infraDataAccess.getSeats(
      req.locationId,
      req.blockId,
      req.floorId
    );
    return seatInfos;
  }

  public async bookASeat(req: SeatBookRequest): Promise<void> {
    const seatInfo = await this.getInfraSeats(req);
    if (seatInfo.seats.findIndex((seat) => seat.seatId === req.seatId) === -1) {
      logger.info(`seat ${req.seatId} not valid`);
      throw new NotFoundError("seat");
    }
    const seats = await bookingDataAccess.getBookedSeatsByFacilities(req);
    if (seats.findIndex((seat) => seat === req.seatId) > -1) {
      logger.info(`seat ${req.seatId} not available to take`);
      throw new ConflictError("seat not available now, pick some other seat");
    }
    const hasBooked = await bookingDataAccess.getBookedSeatsByUserAndDate(
      req.userId,
      req.date
    );
    if (hasBooked)
      throw new ConflictError("user already has booked a seat on the date");
    await bookingDataAccess.updateSeat(req);
  }

  private mapToBooking(models: BookingModel[]) {
    return models.map((bookingDS) => {
      const booking = new Booking();
      booking.bookingDate = AppHelper.reformateDate(bookingDS.bookingDate);
      booking.userId = bookingDS.bookingUserId;
      booking.bookingId = bookingDS.id;
      booking.status = bookingDS.bookingStatus === "A" ? "Active" : "Cancelled";
      const seat = new SeatInformation();
      seat.locationId = bookingDS.bookingLocId;
      seat.blockId = bookingDS.bookingBlockId;
      seat.floorId = bookingDS.bookingFloorId;
      seat.seatId = bookingDS.bookingSeatId;
      booking.seatInformation = seat;
      return booking;
    });
  }
}

export const bookingService = new SeatBookingService();
