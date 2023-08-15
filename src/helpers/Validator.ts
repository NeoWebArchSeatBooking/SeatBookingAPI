import { ValidationError, validate } from "class-validator"
import { UserSeatRequest } from "../models/req/UserSeatsRequest"
import { AppError, ValidationErr } from "../errors/AppErrors";

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
                throw new AppError(500,err.message)
        }
    }
    
}