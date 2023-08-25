import "reflect-metadata"
import { UserRequest } from "./UserRequest"
import { IsNotEmpty } from "class-validator"

export class CancelRequest extends UserRequest{
    @IsNotEmpty()
    seatId: number
}