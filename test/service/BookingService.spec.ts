import { NotFoundError } from "../../src/errors/AppErrors";
import { SeatingRequest } from "../../src/models";
import { bookingService } from "../../src/services/BookingService";
// import { infraDataAccess } from "../../src/dataaccess/InfraDataAccess";
jest.mock("../../src/dataaccess/BookingDataAccess");
// jest.mock("../../src/dataaccess/InfraDataAccess");

describe("Booking Service", () => {
  test("validate getBookingInfo()", async () => {
    const bookings = await bookingService.getBookingInfo("user");
    expect(bookings).toBeTruthy();
    expect(bookings.length).toEqual(2);
    expect(bookings[0].bookingId).toEqual(1);
    expect(bookings[1].bookingId).toEqual(2);
    expect(bookings[0].bookingDate).toEqual("12-08-2023");
    expect(bookings[0].status).toEqual("active");
    expect(bookings[0].seatInformation.seatId).toEqual("A012");
    expect(bookings[0].seatInformation.blockId).toEqual("B1");
    expect(bookings[0].seatInformation.floorId).toEqual("F1");
    expect(bookings[0].seatInformation.locationId).toEqual("L1");
  });

  test("validate getBookingInfo() for empty facilities", async () => {
    bookingService.getBookingInfo = jest.fn().mockImplementation(() => {
      return Promise.resolve([]);
    });

    const bookings = await bookingService.getBookingInfo("user");
    expect(bookings).toBeTruthy();
    expect(bookings.length).toEqual(0);
  });

  test("Validate getAvailableSeats() for invalid facility info", async () => {
    const request = new SeatingRequest();
    request.locationId = "L1";
    try {
      await bookingService.getAvailableSeats(request);
    } catch (err: any) {// eslint-disable-line @typescript-eslint/no-explicit-any
      expect(err).toBeInstanceOf(NotFoundError);
      expect(err.message).toEqual("location");
    }

    request.locationId = "TCO";
    request.blockId = "B1";
    try {
      await bookingService.getAvailableSeats(request);
    } catch (err: any) {// eslint-disable-line @typescript-eslint/no-explicit-any
      expect(err).toBeInstanceOf(NotFoundError);
      expect(err.message).toEqual("block");
    }

    request.locationId = "TCO";
    request.blockId = "SDB1";
    request.floorId = "1";
    try {
      await bookingService.getAvailableSeats(request);
    } catch (err: any) {// eslint-disable-line @typescript-eslint/no-explicit-any
      expect(err).toBeInstanceOf(NotFoundError);
      expect(err.message).toEqual("floor");
    }
  });

  test("Validate getAvailableSeats() for valid info", async () => {
    const request = new SeatingRequest();
    request.locationId = "TCO";
    request.blockId = "SDB1";
    request.floorId = "F1";

    const seats = await bookingService.getAvailableSeats(request);
    expect(seats).toBeTruthy();
    expect(seats.length > 0).toBeTruthy();
  });
});
