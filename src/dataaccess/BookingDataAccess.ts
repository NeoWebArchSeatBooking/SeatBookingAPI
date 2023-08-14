import { AppError } from "../errors/AppErrors";
import { AppHelper } from "../helpers";
import { BookedSeat, Booking, BookingRequest, SeatingRequest } from "../models";
import { BookingModel } from "../models/database/Booking";
import { logger } from "../helpers/Logger"

export class BookingDataAccess {
  
  public async getUserSeats(userId: string): Promise<BookingModel[]> {
    const bookings = await BookingModel.findAll({
      where: { bookingUserId: userId },
    });
    return bookings;
  }

  public async getBookedSeats(req: SeatingRequest): Promise<string[]> {
    const bookings = await BookingModel.findAll({
      where: {
        bookingLocId: req.locationId,
        bookingBlockId: req.blockId,
        bookingFloorId: req.floorId,
        bookingDate: AppHelper.reformateDate(req.date),
      },
    });
    if (bookings.length > 0) {
      const seats = bookings.map((bookingDS) => {
        return bookingDS.bookingSeatId;
      });
      return seats;
    }
    return [];
  }

  public async updateSeat(req: BookingRequest): Promise<void> {
    try{
      const bookedSeat = await BookingModel.create({
          bookingUserId: req.userId,
          bookingStatus: 'A',
          bookingSeatId: req.seatId,
          bookingLocId: req.locationId,
          bookingBlockId: req.blockId,
          bookingFloorId: req.floorId,
          bookingDate: AppHelper.reformateDate(req.date),   
          bookingUpdateTime: Date.now().toString()   
      });
      logger.debug(bookedSeat)
    }catch(err: any){
      logger.error(err)
      throw new AppError(500,err.message)
    }
  }

  public async getBookedSeatsByUserAndDate(userId: string, date: string): Promise<boolean> {
    const bookings = await BookingModel.findAll({
      where: {
        bookingUserId: userId,
        bookingDate: AppHelper.reformateDate(date),
        bookingStatus: 'A'
      },
    });
    return bookings.length > 0
  }

}

export const bookingDataAccess = new BookingDataAccess();
