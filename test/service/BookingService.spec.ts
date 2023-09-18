import { ConflictError, NotFoundError } from "../../src/errors/AppErrors";
import { CancelRequest, SeatBookRequest, SeatSearchRequest } from "../../src/models";
import { bookingService } from "../../src/services/SeatBookingService";
import { UserSeatRequest } from "../../src/models/req/UserSeatsRequest";

jest.mock("../../src/dataaccess/InfraDataAccess");
import { infraDataAccess } from "../../src/dataaccess/InfraDataAccess";
jest.mock("../../src/dataaccess/BookingDataAccess");
import { bookingDataAccess } from "../../src/dataaccess/BookingDataAccess";

describe("Seat Booking Service", () => {
  
  test("setup",()=>{
    expect(true).toBeTruthy();
  })

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe("validate getBookedSeats()", () => {
    test("with valid data", async () => {
      
      const bookings = await bookingService.getBookedSeats(new UserSeatRequest());
      expect(bookings).toBeTruthy();
      expect(bookings.items).toBeTruthy();
      expect(bookings.items.length).toEqual(2);
      expect(bookings.items[0].bookingId).toEqual(1);
      expect(bookings.items[1].bookingId).toEqual(2);
      expect(bookings.items[0].bookingDate).toEqual("2023-08-12");
      expect(bookings.items[0].status).toEqual("active");
      expect(bookings.items[0].seatInformation.seatId).toEqual("A012");
      expect(bookings.items[0].seatInformation.blockId).toEqual("B1");
      expect(bookings.items[0].seatInformation.floorId).toEqual("F1");
      expect(bookings.items[0].seatInformation.locationId).toEqual("L1");
    });

    test("with valid fetch request for admin", async () => {
      const req = new UserSeatRequest()
      req.role = 'admin'
      req.viewRole = 'admin'
      
      const bookings = await bookingService.getBookedSeats(req);
      expect(bookings).toBeTruthy();
      expect(bookings.items).toBeTruthy();
      expect(bookings.items.length).toEqual(2);
      expect(bookings.items[0].bookingId).toEqual(1);
      expect(bookings.items[1].bookingId).toEqual(2);
      expect(bookings.items[0].bookingDate).toEqual("2023-08-12");
      expect(bookings.items[0].status).toEqual("active");
      expect(bookings.items[0].seatInformation.seatId).toEqual("A012");
      expect(bookings.items[0].seatInformation.blockId).toEqual("B1");
      expect(bookings.items[0].seatInformation.floorId).toEqual("F1");
      expect(bookings.items[0].seatInformation.locationId).toEqual("L1");
    });
  });

  describe("validate cancelBookedSeat()", () => {
    test("with valif info", async () => {
      const request = new CancelRequest();
      request.seatId = 1;
      try {
        await bookingService.cancelBookedSeat(request);
      } catch (err: any) {
        expect(err).toBeFalsy()
      }
    });

    test("with invalid seat info", async () => {
      const request = new CancelRequest();
      request.seatId = 1;
      bookingDataAccess.getBookedSeatById = jest.fn().mockImplementation(()=>{
        return Promise.resolve(null)
      })
      try {
        await bookingService.cancelBookedSeat(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("Seat Id not found");
      }
    });

  })

  describe("validate getAvailableSeats()", () => {
    test("with invalid facility location info", async () => {
      const request = new SeatSearchRequest();
      request.locationId = "L1";
      try {
        await bookingService.getAvailableSeats(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("location not found");
      }
    });

    test("with invalid facility block info", async () => {
      const request = new SeatSearchRequest();
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
      const request = new SeatSearchRequest();
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
      const request = new SeatSearchRequest();
      request.locationId = "TCO";
      request.blockId = "SDB1";
      request.floorId = "F1";
      request.availability = "true"
      const seats = await bookingService.getAvailableSeats(request);
      expect(seats).toBeTruthy();
      expect(seats.length > 0).toBeTruthy();
    });
  });

  describe("validate bookASeat()", () => {
    
    test("with invalid seat information", async () => {
      const request = new SeatBookRequest();
      request.locationId = "L1";
      try {
        await bookingService.bookASeat(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(NotFoundError);
        expect(err.message).toEqual("location not found");
      }
    });

    test("with invalid facility block info", async () => {
      const request = new SeatBookRequest();
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
      const request = new SeatBookRequest();
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
      const request = new SeatBookRequest();
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
      const request = new SeatBookRequest();
      request.locationId = "TCO";
      request.blockId = "SDB1";
      request.floorId = "F1";
      request.seatId = "A102";
      try {
        await bookingService.bookASeat(request);
      } catch (err: any) {
        expect(err).toBeInstanceOf(ConflictError);
        expect(err.message).toEqual(
          "Seat not available now!, please choose some other seat"
        );
      }
    });

    test("with valid seat but user has already booked", async () => {
      const request = new SeatBookRequest();
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
        const request = new SeatBookRequest();
        request.locationId = "TCO";
        request.blockId = "SDB1";
        request.floorId = "F1";
        request.seatId = "A103";
        bookingDataAccess.getBookedSeatsByUserAndDate = jest
        .fn()
        .mockImplementation(() => {
          return Promise.resolve(false);
        });
        await bookingService.bookASeat(request);
      } catch (err) {
        expect(err).toBeFalsy();
      }
    });
  });
});
