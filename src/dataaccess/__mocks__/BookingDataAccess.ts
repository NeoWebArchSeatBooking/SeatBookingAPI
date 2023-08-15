import { SeatBookRequest, SeatSearchRequest } from "../../models";
import { BookingModel } from "../../models/database/Booking";

class BookingDataAccess {

  public async getBookedSeatsByUser(userId: string,offset:number=0,limit:number=25): Promise<{bookingSeats:BookingModel[],count:number}> {
    return Promise.resolve({bookingSeats:[
      {
        id: 1,
        bookingUserId: "testuser",
        bookingDate: "12-08-2023",
        bookingStatus: "A",
        bookingLocId: "L1",
        bookingBlockId: "B1",
        bookingFloorId: "F1",
        bookingSeatId: "A012",
        bookingUpdateTime: "",
      },
      {
        id: 2,
        bookingUserId: "testuser",
        bookingDate: "13-08-2023",
        bookingStatus: "A",
        bookingLocId: "L1",
        bookingBlockId: "B1",
        bookingFloorId: "F1",
        bookingSeatId: "A102",
        bookingUpdateTime: "",
      },
    ] as BookingModel[],count:2});
  }

  public async getBookedSeatsByDate(fromDate: string, toDate: string,offset:number=0,limit:number=25): Promise<{bookingSeats:BookingModel[],count:number}> {
    return Promise.resolve({bookingSeats:[
      {
        id: 1,
        bookingUserId: "testuser",
        bookingDate: "12-08-2023",
        bookingStatus: "A",
        bookingLocId: "L1",
        bookingBlockId: "B1",
        bookingFloorId: "F1",
        bookingSeatId: "A012",
        bookingUpdateTime: "",
      },
      {
        id: 2,
        bookingUserId: "testuser",
        bookingDate: "13-08-2023",
        bookingStatus: "A",
        bookingLocId: "L1",
        bookingBlockId: "B1",
        bookingFloorId: "F1",
        bookingSeatId: "A102",
        bookingUpdateTime: "",
      },
    ] as BookingModel[],count:2});
  }

  public async getBookedSeatsByFacilities(_req: SeatSearchRequest): Promise<string[]> {
    return Promise.resolve(["A102", "A012"]);
  }

  public async updateSeat(req: SeatBookRequest): Promise<void> {
    return Promise.resolve();
  }

  public async getBookedSeatsByUserAndDate(
    _userId: string,
    _date: string
  ): Promise<boolean> {
    return Promise.resolve(false);
  }
}

export const bookingDataAccess = new BookingDataAccess();
