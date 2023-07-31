import "reflect-metadata";
export class Metadata {
  status: number;
  message: string;

  constructor(sts: number, msg: string) {
    this.message = msg;
    this.status = sts;
  }
}

export class BaseResponse {
  metadata: Metadata;
}
