import {bookingDataAccess} from "../dataaccess/BookingDataAccess"
import { infraDataAccess } from "../dataaccess/InfraDataAccess";
import { NotFoundError } from "../errors/AppErrors";
import {SeatInfo, SeatingRequest} from "../models"

class BookingService{

    public async getBookingInfo(user: string){
        return await bookingDataAccess.getUserSeats(user)
    }

    public async getAvailableSeats(req: SeatingRequest): Promise<SeatInfo[]>{
        const infras = await infraDataAccess.getInfra();
        const loc = infras.find((loc)=> loc.locationId === req.locationId)
        if(loc === undefined) throw new NotFoundError("location");
        const block = loc.blocks?.find((block)=>block.blockId === req.blockId)
        if(block === undefined) throw new NotFoundError("block");
        const floor = block.floors?.find((flr)=>flr.floorId === req.floorId)
        if(floor === undefined)  throw new NotFoundError("floor");
        
        const seatInfos = await infraDataAccess.getSeats(req.locationId,req.blockId,req.floorId)
        const seats = await bookingDataAccess.getBookedSeats(req);
        const updatedSeatInfos = seatInfos.seats.map((seat)=>{
            const available = !seats.includes(seat.seatId)
            const seatInfo : SeatInfo = { available , ...seat}
            return seatInfo
        })
        return updatedSeatInfos
    }
}

export const bookingService = new BookingService()