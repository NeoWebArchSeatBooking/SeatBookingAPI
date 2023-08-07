import {bookingDataAccess} from "../db/BookingDataAccess"

class BookingService{

    public async getBookingInfo(_user: string){
        return await bookingDataAccess.getBookingInfo(_user)
    }

}

export const bookingService = new BookingService()