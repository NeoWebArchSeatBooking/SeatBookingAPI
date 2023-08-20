import { AppError } from "../errors/AppErrors";
import { AppHelper } from "../helpers";
import { SeatBookRequest, SeatSearchRequest } from "../models";
import { BookingModel } from "../models/database/Booking";
import { logger } from "../helpers/Logger"
import { Op } from "sequelize";

export class BookingDataAccess {
  
  public async getBookedSeatsByDate(fromDate: string, toDate: string,offset:number=0,limit:number=25): Promise<{bookingSeats:BookingModel[],count:number}>{
    const { rows,count } = await BookingModel.findAndCountAll({
      where: { 
        bookingDate: {
          [Op.between]: [AppHelper.reformateDate(fromDate),AppHelper.reformateDate(toDate)]
        }
      },
      offset,
      limit
    });
    const bookingSeats = rows
    return {bookingSeats,count};
  }

  public async getBookedSeatsByUser(userId: string,offset:number=0,limit:number=25): Promise<{bookingSeats:BookingModel[],count:number}> {
    const { rows,count } = await BookingModel.findAndCountAll({
      where: { bookingUserId: userId },
      offset,
      limit
    });
    const bookingSeats = rows
    return {bookingSeats,count};
  }

  public async getBookedSeatsByFacilities(req: SeatSearchRequest): Promise<string[]> {
    const bookings = await BookingModel.findAll({
      where: {
        bookingLocId: req.locationId,
        bookingBlockId: req.blockId,
        bookingFloorId: req.floorId,
        bookingDate: AppHelper.reformateDate(req.date),
      }
    });
    if (bookings.length > 0) {
      const seats = bookings.map((bookingDS) => {
        return bookingDS.bookingSeatId;
      });
      return seats;
    }
    return [];
  }

  public async updateSeat(req: SeatBookRequest): Promise<void> {
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
