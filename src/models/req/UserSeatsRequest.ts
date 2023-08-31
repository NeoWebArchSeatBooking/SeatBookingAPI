import { IsNotEmpty, IsNumber, IsOptional, Matches, ValidateIf } from "class-validator"
import "reflect-metadata"
import { UserRequest } from "./UserRequest"

export class UserSeatRequest extends UserRequest{
    
    @ValidateIf(o => o.role === 'admin' && o.viewRole === 'admin' && o.fromDate !== undefined)
    @IsNotEmpty()
    @Matches(new RegExp(/^\d{2}-\d{2}-\d{4}$/),{message:"fromDate should be in dd-mm-yyyy format"})
    fromDate: string
    @ValidateIf(o => o.role === 'admin' && o.viewRole === 'admin' && o.fromDate !== undefined)
    @IsNotEmpty()
    @Matches(new RegExp(/^\d{2}-\d{2}-\d{4}$/),{message:"toDate should be in dd-mm-yyyy format"})
    toDate: string
    @ValidateIf(o => o.offset !== undefined)
    @IsNumber()
    offset: number = 0
    @IsOptional()
    locationId: string
    @IsOptional()
    blockId: string
    @IsOptional()
    user: string
}