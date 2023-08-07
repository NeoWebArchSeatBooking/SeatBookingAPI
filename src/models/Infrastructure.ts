import "reflect-metadata";
import { BaseResponse } from "./BaseResponse";



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
  seatId: string;
  seatType: SeatType;
  seatLocation: SeatLocation;
}

export class Wing {
  wingId: string;
  wingName: string;
  totalSeats: number;
  seats?: Seat[];
}

export class Floor {
  floorId: string;
  wings?: Wing[];
}

export class Block {
  blockId: string;
  blockName: string;
  floorCount: number;
  floors?: Floor[];
}

export class Location {
  locationId: string;
  locationName: string;
  blocks?: Block[];
}

export class LocBlocks{
  locationId: string
  blocks: Block[]
}

export class BlockFloors{
  blockId: string
  floors: Floor[]
}

export class FloorWings{
  floorId: string
  wings: Wing[]
}

export class WingSeats{
  wingId: string
  seats: Seat[]
}

export class InfraPayload{
  locations: Location[];
  blocks: LocBlocks[];
  floors: BlockFloors[];
  wings: FloorWings[]
  seats: WingSeats[]
}


export class InfraResponse extends BaseResponse {
  user: string;
  infras: InfraPayload
  constructor(usr: string) {
    super();
    this.user = usr;
  }
}


