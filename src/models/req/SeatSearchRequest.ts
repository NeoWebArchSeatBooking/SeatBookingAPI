import { IsIn, IsNotEmpty, IsOptional, Matches } from "class-validator";
import { UserRequest } from "./UserRequest";

export class SeatSearchRequest extends UserRequest {
    @IsNotEmpty()
    locationId: string
    @IsOptional()
    blockId: string
    @IsOptional()
    floorId: string
    @IsNotEmpty()
    @Matches(new RegExp(/^\d{2}-\d{2}-\d{4}$/),{message:"date should be in dd-mm-yyyy format"})
    date: string
    @IsOptional()
    @IsIn(['true','false'])
    availability: string
}
