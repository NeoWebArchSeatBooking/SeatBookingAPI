import { preferenceService } from "../../src/services/PreferenceService";

jest.mock("../../src/dataaccess/PreferenceDataAccess");
import { preferenceDataAccess } from "../../src/dataaccess/PreferenceDataAccess";
import { PreferenceRequest } from "../../src/models";

describe("Preference Service", () => {
  
  test("setup",()=>{
    expect(true).toBeTruthy();
  })

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe("validate getPreferences()", () => {
    
    test("with valid data", async () => {
      const preference = await preferenceService.getPreferences('test');
      expect(preference).toBeTruthy();
      expect(preference.length).toEqual(1)
    });

    test("with invalid data", async () => {
      const preference = await preferenceService.getPreferences('test1');
      expect(preference).toBeTruthy();
      expect(preference.length).toEqual(0)
    });

  });

  describe("validate createPreferences()", () => {
    test("with valid data", async () => {
      await preferenceService.createPreference('', new PreferenceRequest());
    });
  });

  describe("validate cancelPreference()", () => {
    test("with valid data", async () => {
      await preferenceService.cancelPreference(1);
    });
  });

});
