import { AppHelper } from "../../src/helpers";

describe("validate reformateDate", () => {
  test("validate invalid date format", () => {
    let output = AppHelper.reformateDate("11/11/1111");
    expect(output).toBeFalsy();

    output = AppHelper.reformateDate("");
    expect(output).toBeFalsy();
  });

  test("validate valid date format dd-mm-yyyy", () => {
    const output = AppHelper.reformateDate("11-11-1111");
    expect(output).toBeTruthy();
    expect(output).toEqual("1111-11-11");
  });

  test("validate valid date format yyyy-dd-mm", () => {
    const output = AppHelper.reformateDate("1111-11-11");
    expect(output).toBeTruthy();
    expect(output).toEqual("11-11-1111");
  });
});
