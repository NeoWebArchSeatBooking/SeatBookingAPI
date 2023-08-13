import { Booking, SeatingRequest } from "../../models";

class BookingDataAccess {
  public async getUserSeats(userId: string): Promise<Booking[]> {
    return Promise.resolve([
      {
        bookingId: 1,
        userId: "testuser",
        bookingDate: "12-08-2023",
        status: "active",
        seatInformation: {
          locationId: "L1",
          blockId: "B1",
          floorId: "F1",
          seatId: "A012",
        },
      },
      {
        bookingId: 2,
        userId: "testuser",
        bookingDate: "13-08-2023",
        status: "active",
        seatInformation: {
          locationId: "L1",
          blockId: "B1",
          floorId: "F1",
          seatId: "A202",
        },
      },
    ]);
  }

  public async getBookedSeats(_req: SeatingRequest): Promise<string[]> {
    return Promise.resolve(["A202", "A012"]);
  }
}

export const bookingDataAccess = new BookingDataAccess();
