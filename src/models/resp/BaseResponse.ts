import "reflect-metadata";
export class Metadata {
  status: number;
  message: string;
  limit?: number
  offset?: number

  constructor(sts: number, msg: string) {
    this.message = msg;
    this.status = sts;
    this.limit = 100
    this.offset = 0
  }
}

export class BaseResponse {
  _meta: Metadata;
}
