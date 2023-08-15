import { AppError } from "../errors/AppErrors";
import { BaseResponse, Metadata, UserRequest } from "../models";

export class ResponseHelper {
  
  public static setSuccessResponse(response: BaseResponse,req?:UserRequest) {
    const metadata = new Metadata(200, "Success");
    response._meta = metadata;
    response._meta.limit = req?.limit
    response._meta.offset = req?.offset
  }

  public static setFailureResponse(response: BaseResponse,err:AppError){
    const metadata: Metadata = new Metadata(err.code,err.message)
    response._meta = metadata;
  }

  public static getFailureResponse(error: AppError){
    const resp = new BaseResponse()
    resp._meta  = new Metadata(error.code ?? 500 , error.message)
    return resp
  }
}
