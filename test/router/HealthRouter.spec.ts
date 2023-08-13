const superagent = require("supertest");
import { sbConnector } from "../../src/helpers/DBProvider";
import { app } from "../../src/index";
import { bookingService } from "../../src/services/BookingService";
jest.mock("../../src/helpers/DBProvider");
jest.mock("../../src/services/BookingService");

const request = superagent(app);

describe("HealthRouter", () => {
  test("", async () => {
    sbConnector.authenticate = jest.fn().mockImplementation(() => {
      return Promise.resolve();
    });
    bookingService.getAvailableSeats = jest.fn().mockImplementation(() => {
      return Promise.resolve([]);
    });
    const resp = await request.get("/v1/seat-management/health");
    expect(resp).toBeTruthy();
    expect(resp._meta).toBeTruthy();
    expect(resp._meta.status).toEqual(200);
  });
});
