import { BaseResponse } from "./BaseResponse";
import { InfraPayload } from "../Infrastructure";

export class InfraResponse extends BaseResponse {
    user: string;
    infras: InfraPayload[]
    constructor(usr: string) {
      super();
      this.user = usr;
    }
}