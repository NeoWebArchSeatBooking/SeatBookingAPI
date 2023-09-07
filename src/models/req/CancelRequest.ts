import { IsNotEmpty } from "class-validator"
import "reflect-metadata"
import { UserRequest } from "./UserRequest"

export class CancelRequest extends UserRequest{
    @IsNotEmpty()
    seatId: number
}