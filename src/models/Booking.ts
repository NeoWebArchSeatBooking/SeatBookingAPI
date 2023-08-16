import { SeatType } from "./Infrastructure"

export class Booking{
    bookingId: number
    userId: string
    bookingDate: string
    status: string
    seatInformation: SeatInformation
}


export class SeatInformation{
    locationId: string
    blockId: string
    floorId: string
    seatId: string
}

export class SearchSearchInfo{
    items: Booking[]
    total: number
}


export class SeatInfo extends SeatType{
    available: boolean
}