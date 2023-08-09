import "reflect-metadata";

export const SeatArnmentType ={
  RowSeat: 'ROW_SEAT',
  MeetingHallSeat:'CONF_SEAT',
  CabinSeat:'CABIN_SEAT',
  CubicalSeat:'CUBICAL_SEAT'
}

export const SeatLocation = {
  WindowFace:'WINDOW_FACE',
  EntranceFace:'ENTRANCE_FACE',
  Middle:'MIDDLE',
  Unknown:'UNKNOWN',
}

export class SeatType {
  seatId: string;
  seatType: string;
  seatLocation: string;
}

export class Wing {
  wingId: string;
  wingName: string;
  totalSeats: number;
  seats?: SeatType[];
}

export class Floor {
  floorId: string;
  status: string
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

/*
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
*/

export class InfraPayload{
  locations: Location[];
}

export class SeatPayload{
  locationId: string;
  blockId: string
  floorId: string
  seats: SeatType[]
}



