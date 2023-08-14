import { UserRequest } from "./UserRequest";

export class SeatingRequest extends UserRequest {
    locationId: string
    blockId: string
    floorId: string
    date: string
    fromDate?: string
    toDate?: string
    offset?: number
    limit?: number
}