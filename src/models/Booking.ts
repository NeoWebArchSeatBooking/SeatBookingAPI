import { SeatArnmentType, SeatType } from "./Infrastructure"

export class Booking{
    id: number
    userId: string
    date: string
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