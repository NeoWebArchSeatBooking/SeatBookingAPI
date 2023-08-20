import { SeatInfo } from "../Booking";
import { BaseResponse } from "./BaseResponse";

export class SeatingResponse extends BaseResponse{
    seats: SeatInfo[]
}