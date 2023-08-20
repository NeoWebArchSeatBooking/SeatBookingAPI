import "reflect-metadata";
export class Metadata {
  status: number;
  message: string;
  limit?: number;
  offset?: number;
  total? : number
  constructor(sts: number, msg: string) {
    this.message = msg;
    this.status = sts;
  }
}

export class BaseResponse {
  _meta: Metadata;
}
