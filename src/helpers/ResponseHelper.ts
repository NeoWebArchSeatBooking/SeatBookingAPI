import { NotFoundError } from "../errors/AppErrors";
import { BaseResponse, Metadata } from "../models";

export class ResponseHelper {
  public static setSuccessResponse(response: BaseResponse) {
    const metadata = new Metadata(200, "Success");
    response._meta = metadata;
  }

  public static setFailureResponse(response: BaseResponse,err:any){
    let metadata: Metadata = new Metadata(500, err.message)
    if(err instanceof NotFoundError){
      metadata = new Metadata(err.code, err.message);
    }
    response._meta = metadata;
  }
}
