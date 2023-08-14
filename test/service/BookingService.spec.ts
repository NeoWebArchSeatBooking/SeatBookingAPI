import { after, describe, test } from "node:test";
import { bookingDataAccess } from "../../src/dataaccess/BookingDataAccess";
import { ConflictError, NotFoundError } from "../../src/errors/AppErrors";
import { BookingRequest, SeatingRequest } from "../../src/models";
import { bookingService } from "../../src/services/SeatBookingService";

jest.mock("../../src/dataaccess/BookingDataAccess");

describe("Seat Booking Service", () => {
  
  after(() => {
    jest.clearAllMocks();
  });

  describe("validate getBookedSeats()", () => {
    test("with valid data", async () => {
      
      const bookings = await bookingService.getBookedSeats("user");
      expect(bookings).toBeTruthy();
      expect(bookings.length).toEqual(2);
      expect(bookings[0].bookingId).toEqual(1);
      expect(bookings[1].bookingId).toEqual(2);
      expect(bookings[0].bookingDate).toEqual("2023-08-12");
      expect(bookings[0].status).toEqual("Active");
      expect(bookings[0].seatInformation.seatId).toEqual("A012");
      expect(bookings[0].seatInformation.blockId).toEqual("B1");
      expect(bookings[0].seatInformation.floorId).toEqual("F1");
      expect(bookings[0].seatInformation.locationId).toEqual("L1");
    });

    test("invalid data", async () => {
      bookingDataAccess.getBookedSeats = jest.fn().mockImplementation(() => {
        return Promise.resolve([]);
      });

      const bookings = await bookingService.getBookedSeats("user");
      expect(bookings).toBeTruthy();
      expect(bookings.length).toEqual(0);
    });
  });

  describe("validate getAvailableSeats()", () => {
    test("with invalid facility location info", async () => {
      const request = new SeatingRequest();
      request.locationId = "L1";
      try {
        await bookingService.getAvailableSeats(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("location not found");
      }
    });

    test("with invalid facility block info", async () => {
      const request = new SeatingRequest();
      request.locationId = "TCO";
      request.blockId = "B1";
      try {
        await bookingService.getAvailableSeats(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("block not found");
      }
    });

    test("with invalid facility floor info", async () => {
      const request = new SeatingRequest();
      request.locationId = "TCO";
      request.blockId = "SDB1";
      request.floorId = "1";
      try {
        await bookingService.getAvailableSeats(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("floor not found");
      }
    });

    test("with valid faciltiy info", async () => {
      const request = new SeatingRequest();
      request.locationId = "TCO";
      request.blockId = "SDB1";
      request.floorId = "F1";
      const seats = await bookingService.getAvailableSeats(request);
      expect(seats).toBeTruthy();
      expect(seats.length > 0).toBeTruthy();
    });
  });

  describe("validate bookASeat()", () => {
    const request = new BookingRequest();

    test("with invalid seat information", async () => {
      request.locationId = "L1";
      try {
        await bookingService.bookASeat(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("location not found");
      }
    });

    test("with invalid facility block info", async () => {
      request.locationId = "TCO";
      request.blockId = "B1";
      try {
        await bookingService.bookASeat(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("block not found");
      }
    });

    test("with invalid facility floor info", async () => {
      request.locationId = "TCO";
      request.blockId = "SDB1";
      request.floorId = "1";
      try {
        await bookingService.bookASeat(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("floor not found");
      }
    });

    test("with invalid facility seat info", async () => {
      request.locationId = "TCO";
      request.blockId = "SDB1";
      request.floorId = "F1";
      request.seatId = "A100";
      try {
        await bookingService.bookASeat(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("seat not found");
      }
    });

    test("with valid seat but not available", async () => {
      request.locationId = "TCO";
      request.blockId = "SDB1";
      request.floorId = "F1";
      request.seatId = "A102";
      try {
        await bookingService.bookASeat(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(ConflictError);
        expect(err.message).toEqual(
          "seat not available now, pick some other seat"
        );
      }
    });

    test("with valid seat but user has already booked", async () => {
      request.locationId = "TCO";
      request.blockId = "SDB1";
      request.floorId = "F1";
      request.seatId = "A103";
      bookingDataAccess.getBookedSeatsByUserAndDate = jest
        .fn()
        .mockImplementation(() => {
          return Promise.resolve(true);
        });
      try {
        await bookingService.bookASeat(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(ConflictError);
        expect(err.message).toEqual(
          "user already has booked a seat on the date"
        );
      }
    });

    test("with valid seat", async () => {
      try {
        request.locationId = "TCO";
        request.blockId = "SDB1";
        request.floorId = "F1";
        request.seatId = "A103";
        await bookingService.bookASeat(request);
      } catch (err) {
        expect(err).toBeFalsy();
      }
    });
  });
});
