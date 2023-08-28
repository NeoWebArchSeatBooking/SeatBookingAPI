import { AppError } from "../errors/AppErrors";
import { AppHelper } from "../helpers";
import { SeatBookRequest, SeatSearchRequest } from "../models";
import { BookingModel } from "../models/database/Booking";
import { logger } from "../helpers/Logger"
import { ValidationError } from "sequelize";
import { Constants } from "../helpers/Constants";
import { BookingQueryHelper } from "../helpers/BookingQueryHelper";
import { UserSeatRequest } from "../models/req/UserSeatsRequest";

export class BookingDataAccess {
  
  public async getBookedSeatsByReq(req: UserSeatRequest,offset:number=0,limit:number=100): Promise<{bookingSeats:BookingModel[],count:number}>{
    
    const whereCluse = BookingQueryHelper.getBuilder()
      .andLocationId(req.locationId)
      .andBlockId(req.blockId)
      .andDateBetween(AppHelper.reformateDate(req.fromDate),AppHelper.reformateDate(req.toDate))
      .andUserId(req.user)
      .getWhere()
    
    const { rows,count } = await BookingModel.findAndCountAll({
      where: whereCluse,
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
    
    const whereCluse = BookingQueryHelper.getBuilder()
      .andLocationId(req.locationId)
      .andBlockId(req.blockId)
      .andDateisEq(AppHelper.reformateDate(req.date))
      .andFloorId(req.floorId)
      .getWhere()

    const bookings = await BookingModel.findAll({
      where: whereCluse
    });
    
    if (bookings.length > 0) {
      const seats = bookings.map((bookingDS) => {
        return bookingDS.bookingSeatId;
      });
      return seats;
    }
    return [];
  }

  public async createBooking(req: SeatBookRequest,status: string=Constants.SEAT_STATUS_CDE_ACTIVE): Promise<void> {
    try{
      const bookedSeat = await BookingModel.create({
          bookingUserId: req.userId,
          bookingStatus: status,
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
      const message = err instanceof ValidationError 
        ? err.errors.map((err)=>err.message).join("->") : err.message
      throw new AppError(500,message)
    }
  }

  public async getBookedSeatsByUserAndDate(userId: string, date: string, status: string): Promise<BookingModel[]> {
    const bookings = await BookingModel.findAll({
      where: {
        bookingUserId: userId,
        bookingDate: AppHelper.reformateDate(date),
        bookingStatus: status
      },
    });
    return bookings
  }

  public async getBookedSeatById(id: number){
    return await BookingModel.findByPk(id);
  }

  public async updateSeatStatusById(bookingId: number,statusCde: string):Promise<boolean>{
    const [affectedCount] = await BookingModel.update(
        { bookingStatus: statusCde  },
        {
          where: {
            id:bookingId
          }
        }
      )      
    return affectedCount > 0  
  }

}

export const bookingDataAccess = new BookingDataAccess();
