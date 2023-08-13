import {
  AuthError,
  BadRequest,
  NotFoundError,
} from "../../src/errors/AppErrors";
import { ResponseHelper } from "../../src/helpers/ResponseHelper";

describe("Validate ResponseHelper", () => {
  describe("getFailureResponse()", () => {
    test("validate bad request", () => {
      const output = ResponseHelper.getFailureResponse(
        new BadRequest("no header")
      );
      expect(output).toBeTruthy();
      expect(output._meta).toBeTruthy();
      expect(output._meta.status).toEqual(400);
    });

    test("validate auth request", () => {
      const output = ResponseHelper.getFailureResponse(
        new AuthError("auth failure")
      );
      expect(output).toBeTruthy();
      expect(output._meta).toBeTruthy();
      expect(output._meta.status).toEqual(403);
    });

    test("validate not found request", () => {
      const output = ResponseHelper.getFailureResponse(
        new NotFoundError("not found")
      );
      expect(output).toBeTruthy();
      expect(output._meta).toBeTruthy();
      expect(output._meta.status).toEqual(404);
    });
  });
});
