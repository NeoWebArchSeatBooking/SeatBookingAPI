import { BookingRequest, SeatingRequest } from "../../models";
import { BookingModel } from "../../models/database/Booking";

class BookingDataAccess {
  public async getUserSeats(_userId: string): Promise<BookingModel[]> {
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
    ] as BookingModel[]);
  }

  public async getBookedSeats(_req: SeatingRequest): Promise<string[]> {
    return Promise.resolve(["A102", "A012"]);
  }

  public async updateSeat(req: BookingRequest): Promise<void> {
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
