import { BaseResponse } from "./BaseResponse"

export class Booking{
    id: number
    eId: string
    date: string
    status: string
    seatInformation: SeatInfo
}

export class SeatInfo{
    buildingId: number
    floorId: number
    seatId: string
}

export class BookingResponse extends BaseResponse{
    items: Booking[]
}