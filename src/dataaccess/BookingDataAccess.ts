import { AppHelper } from "../helpers";
import { BookedSeat, Booking, BookingModel, SeatInfo,SeatingRequest } from "../models";

class BookingDataAccess{

    private mapToBooking(models : BookingModel[]){
        return models.map((bookingDS)=>{
            const booking = new Booking()
            booking.date = AppHelper.reformateDate(bookingDS.bookingDate)
            booking.userId = bookingDS.bookingUserId
            booking.id = bookingDS.id
            booking.status = bookingDS.bookingStatus === 'A' ? 'Active' : 'Cancelled'
            const seat = new BookedSeat()
            seat.locationId = bookingDS.bookingLocId
            seat.blockId = bookingDS.bookingBlockId
            seat.floorId = bookingDS.bookingFloorId
            seat.seatId = bookingDS.bookingSeatId
            booking.seatInformation = seat
            return booking
        })
    }

    public async getUserSeats(userId: string): Promise<Booking[]>{
        const bookings = await BookingModel.findAll({where:{bookingUserId: userId }})
        return this.mapToBooking(bookings)
    }

    public async getBookedSeats(req: SeatingRequest): Promise<String[]> {
        const bookings = await BookingModel.findAll({
            where:{
                bookingLocId: req.locationId,
                bookingBlockId: req.blockId,
                bookingFloorId: req.floorId,
                bookingDate: AppHelper.reformateDate(req.date)
            }
        })
        if( bookings.length > 0 ) {
            const seats = bookings.map((bookingDS)=>{
                return bookingDS.bookingSeatId
            })
            return seats
        }
        return []
    }

    

}

export const bookingDataAccess = new BookingDataAccess()