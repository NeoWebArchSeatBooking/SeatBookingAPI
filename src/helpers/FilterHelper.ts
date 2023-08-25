import { SeatInfo } from "../models";

export class FilterHelper{

    public static applyAvailablityFilter(seats: SeatInfo[], availability: string){
        if(availability){
            return seats.filter((seat)=> seat.available.toString() === availability)
        }
        return seats
    }
}