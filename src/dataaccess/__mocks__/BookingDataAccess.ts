import { SeatingRequest } from "../../models";
import { BookingModel } from "../../models/database/Booking";

class BookingDataAccess {
  public async getUserSeats(userId: string): Promise<BookingModel[]> {
    return Promise.resolve([
      {
        id: 1,
        bookingUserId: "testuser",
        bookingDate: "12-08-2023",
        bookingStatus: "A",
        bookingLocId: "L1",
        bookingBlockId: "B1",
        bookingFloorId: "F1",
        bookingSeatId: "A012",
        bookingUpdateTime: ""
      },
      {
        id: 2,
        bookingUserId: "testuser",
        bookingDate: "13-08-2023",
        bookingStatus: "A",
        bookingLocId: "L1",
        bookingBlockId: "B1",
        bookingFloorId: "F1",
        bookingSeatId: "A202",
        bookingUpdateTime: ""
      },
    ] as BookingModel[]) ;
  }

  public async getBookedSeats(_req: SeatingRequest): Promise<string[]> {
    return Promise.resolve(["A202", "A012"]);
  }
}

export const bookingDataAccess = new BookingDataAccess();
