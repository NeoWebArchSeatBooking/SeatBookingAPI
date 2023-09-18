import { AppError } from "../errors/AppErrors";
import { AppHelper } from "../helpers";
import { SeatBookRequest, SeatSearchRequest } from "../models";
import { BookingModel } from "../models/database/Booking";
import { logger } from "../helpers/Logger"
import { ValidationError } from "sequelize";
import { Constants } from "../helpers/Constants";
import { BookingQueryHelper } from "../helpers/BookingQueryHelper";
import { UserSeatRequest } from "../models/req/UserSeatsRequest";
const cls = {class : "BookingDataAccess"}

export class BookingDataAccess {
  
  public async getBookedSeatsByReq(req: UserSeatRequest,offset:number=0,limit:number=100): Promise<{bookingSeats:BookingModel[],count:number}>{
    logger.debug(cls,"fetching booked seats by various filters")
    const whereCluse = BookingQueryHelper.getBuilder()
      .andLocationId(req.locationId)
      .andBlockId(req.blockId)
      .andDateBetween(AppHelper.reformateDate(req.fromDate),AppHelper.reformateDate(req.toDate))
      .andUserIdLike(req.user)
      .andStatus(req.status)
      .getWhere()
    
    const { rows,count } = await BookingModel.findAndCountAll({
      where: whereCluse,
      offset,
      limit
    });
    const bookingSeats = rows
    return {bookingSeats,count};
  }

  public async getBookedSeatsByUser(userId: string,offset:number=0,limit:number=25, status?: string): Promise<{bookingSeats:BookingModel[],count:number}> {
    logger.debug(cls,"fetching booked seats for user")
    const whereCluse = BookingQueryHelper.getBuilder()
      .andUserId(userId)
      .andStatus(status)
      .getWhere()
    
    const { rows,count } = await BookingModel.findAndCountAll({
      where: whereCluse,
      order: [
        ['id', 'DESC']
      ],
      offset,
      limit
    });
    const bookingSeats = rows
    return {bookingSeats,count};
  }

  public async getBookedSeatsByFacilities(req: SeatSearchRequest): Promise<string[]> {
    logger.debug(cls,"fetching booked seats by various facility filters")
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
      logger.debug(cls,"creating a booked seat entry")
      await BookingModel.create({
          bookingUserId: req.userId,
          bookingStatus: status,
          bookingSeatId: req.seatId,
          bookingLocId: req.locationId,
          bookingBlockId: req.blockId,
          bookingFloorId: req.floorId,
          bookingDate: AppHelper.reformateDate(req.date),   
          bookingUpdateTime: Date.now().toString()   
      });
    }catch(err: any){
      logger.error({...cls,...err})
      const message = err instanceof ValidationError 
        ? err.errors.map((err)=>err.message).join("->") : err.message
      throw new AppError(500,message)
    }
  }

  public async getBookedSeatsByUserAndDate(userId: string, date: string, status: string): Promise<BookingModel[]> {
    logger.debug(cls,"fetching booked seats for user on specific date")
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
    logger.debug(cls,"fetching booked seats for specific booked id")
    return await BookingModel.findByPk(id);
  }

  public async updateSeatStatusById(bookingId: number,statusCde: string):Promise<boolean>{
    logger.debug(cls,"updating seat status")
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
