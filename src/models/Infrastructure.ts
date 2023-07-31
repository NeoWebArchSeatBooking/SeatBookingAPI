import "reflect-metadata";
import { BaseResponse } from "./BaseResponse";

export class InfraRequest {
  userId: string;
  role: string;
}

export enum SeatType {
  RowSeat,
  MeetingHallSeat,
  CabinSeat,
}

export enum SeatLocation {
  WindowFace,
  EntranceFace,
  Middle,
  Unknown,
}

export class Seat {
  seatId: number;
  seatType: SeatType;
  seatLocation: SeatLocation;
}

export class Wing {
  wingId: string;
  wingName: string;
  totalSeats: number;
  seats: Seat[];
}

export class Floor {
  floorId: number;
  wings: Wing[];
}

export class Block {
  blockId: string;
  blockName: string;
  floorCount: number;
  floors: Floor[];
}

export class Location {
  locationId: string;
  locationName: string;
  blocks: Block[];
}

export class InfraResponse extends BaseResponse {
  user: string;
  locations: Location[];
  constructor(usr: string) {
    super();
    this.user = usr;
  }
}
