import { ValidationError, validate } from "class-validator"
import { UserSeatRequest } from "../models/req/UserSeatsRequest"
import { AppError, ValidationErr } from "../errors/AppErrors";
import { CancelRequest } from "../models/req/CancelRequest";
import { SeatSearchRequest } from "../models";

export class Validator{

    public static async validateUserSeatRequest(userSeatRequest: UserSeatRequest){
        try{
          const errors:ValidationError[] = await validate(userSeatRequest,{always:true});
          if(errors.length > 0){
            let messages = "["
            for(const er of errors){
                for(const msg in er.constraints){
                    messages += er.constraints[msg]+','
                }
            }
            throw new ValidationErr(messages+"]")
           }
        } catch(err:any){
            throw new AppError(err.code ?? 500,err.message)
        }
    }

    public static async validateSeatSearchRequest(seatSearchRequest: SeatSearchRequest){
        try{
          const errors:ValidationError[] = await validate(seatSearchRequest,{always:true});
          if(errors.length > 0){
            let messages = "["
            for(const er of errors){
                for(const msg in er.constraints){
                    messages += er.constraints[msg]+','
                }
            }
            throw new ValidationErr(messages+"]")
           }
           // TODO date should be greater than current date validation
        } catch(err:any){
                throw new AppError(err.code ?? 500,err.message)
        }
    }


    public static async validateCancelRequest(cancelRequest: CancelRequest){
        try{
          const errors:ValidationError[] = await validate(cancelRequest,{always:true});
          if(errors.length > 0){
            let messages = "["
            for(const er of errors){
                for(const msg in er.constraints){
                    messages += er.constraints[msg]+','
                }
            }
            throw new ValidationErr(messages+"]")
           }
        } catch(err:any){
                throw new AppError(err.code ?? 500,err.message)
        }
    }
    
}