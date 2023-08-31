import { ValidationError, validate } from "class-validator"
import { UserSeatRequest } from "../models/req/UserSeatsRequest"
import { AppError, ValidationErr } from "../errors/AppErrors";
import { CancelRequest } from "../models/req/CancelRequest";
import { SeatSearchRequest } from "../models";
import { AppHelper } from "./AppHelper";

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

    public static async validateSeatSearchRequest(request: SeatSearchRequest){
        try{
          const errors:ValidationError[] = await validate(request,{always:true});
          if(errors.length > 0){
            let messages = "["
            for(const er of errors){
                for(const msg in er.constraints){
                    messages += er.constraints[msg]+','
                }
            }
            throw new ValidationErr(messages+"]")
           }
           if(!AppHelper.isGreaterThanCurrentDate(new Date(AppHelper.reformateDate(request.date)),2)){
            throw new ValidationErr("Request date should be 2 days later than today")
           }
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