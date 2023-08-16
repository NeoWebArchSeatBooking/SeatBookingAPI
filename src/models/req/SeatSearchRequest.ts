import { UserRequest } from "./UserRequest";

export class SeatSearchRequest extends UserRequest {
    locationId: string
    blockId: string
    floorId: string
    date: string
}