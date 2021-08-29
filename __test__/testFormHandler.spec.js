import { handleSubmit } from "../src/client/js/formHandler.js";
import "babel-polyfill";

describe("Testing handleSubmit() function", () => {
  test("Testing handleSubmit() function should exist", () => {
    expect(checkURL).toBeDefined();
  });

  test("Testing handleSubmit() should to be a function", () => {
    expect(typeof checkURL).toBe("function");
  });
});
