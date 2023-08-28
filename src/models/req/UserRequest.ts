import "reflect-metadata"
import {IsNotEmpty, IsNumber, IsPositive, ValidateIf} from 'class-validator'

export class UserRequest {
    @IsNotEmpty()
    userId: string;
    @IsNotEmpty()
    role: string;
    viewRole: string = 'USER'
    offset?: number
    @ValidateIf(o=> o.limit !== undefined)
    @IsNumber()
    @IsPositive()
    limit?: number
}