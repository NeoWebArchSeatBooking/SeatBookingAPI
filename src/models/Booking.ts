import { SeatType } from "./Infrastructure"

export class Booking{
    bookingId: number
    userId: string
    bookingDate: string
    status: string
    seatInformation: BookedSeat
}

export class BookedSeat{
    locationId: string
    blockId: string
    floorId: string
    seatId: string
}

export class SeatInfo extends SeatType{
    available: boolean
}