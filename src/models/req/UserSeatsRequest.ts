import "reflect-metadata"
import { IsNotEmpty, IsNumber, Matches, ValidateIf } from "class-validator"
import { UserRequest } from "./UserRequest"

export class UserSeatRequest extends UserRequest{
    
    @ValidateIf(o => o.role === 'admin' && o.viewRole === 'admin')
    @IsNotEmpty()
    @Matches(new RegExp(/^\d{2}-\d{2}-\d{4}$/),{message:"fromDate should be in dd-mm-yyyy format"})
    fromDate: string
    @ValidateIf(o => o.role === 'admin' && o.viewRole === 'admin')
    @IsNotEmpty()
    @Matches(new RegExp(/^\d{2}-\d{2}-\d{4}$/),{message:"toDate should be in dd-mm-yyyy format"})
    toDate: string
    @ValidateIf(o => o.offset !== undefined)
    @IsNumber()
    offset: number = 0
    
}