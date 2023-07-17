import { BaseResponse, Metadata } from "../models";

export class ResponseHelper {
  public static setSuccessResponse(response: BaseResponse) {
    const metadata = new Metadata(200, "Success");
    response.metadata = metadata;
  }
}
