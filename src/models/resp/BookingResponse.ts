import { Booking } from "../Booking";
import { BaseResponse } from "./BaseResponse";

export class BookedSeatResponse extends BaseResponse{
    items: Booking[]
}