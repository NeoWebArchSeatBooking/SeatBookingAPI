import { Booking, SeatInfo } from "../models";

class BookingDataAccess{

    public async getBookingInfo(_userId: string): Promise<Booking[]>{
        const booking :Booking[] = []
        const booking1 = new Booking()
        const seatInfo = new SeatInfo()
        seatInfo.buildingId =1
        seatInfo.floorId = 11
        seatInfo.seatId = "s11-1004"
        booking1.id = 1
        booking1.eId = "E121"
        booking1.date = "01/05/2023"
        booking1.status = "active"
        booking1.seatInformation = seatInfo
        booking.push(booking1)
        const booking2 = new Booking()
        const seatInfo2 = new SeatInfo()
        seatInfo2.buildingId =2
        seatInfo2.floorId = 22
        seatInfo2.seatId = "s22-2002"
        booking2.id = 2
        booking2.eId = "E122"
        booking2.date = "01/05/2023"
        booking2.status = "active"
        booking2.seatInformation = seatInfo
        booking.push(booking2)
        return booking
    }


}

export const bookingDataAccess = new BookingDataAccess()