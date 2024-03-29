import { infraService } from "../../src/services/InfraService";
jest.mock("../../src/dataaccess/InfraDataAccess");
import { infraDataAccess } from "../../src/dataaccess/InfraDataAccess";

describe("Infra Service", () => {
  test("validate getInfras()", async () => {
    const infras = await infraService.getInfra();
    expect(infras).toBeTruthy();
    expect(infras.length > 0).toBeTruthy();
    expect(infras[0].locationId).toEqual("TCO");
    expect(infras[0].blocks).toBeTruthy();
    expect(infras[0].blocks?.length).toEqual(2);
  });
});
