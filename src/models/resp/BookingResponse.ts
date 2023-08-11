import { Booking } from "../Booking";
import { BaseResponse } from "./BaseResponse";

export class BookingResponse extends BaseResponse{
    items: Booking[]
}