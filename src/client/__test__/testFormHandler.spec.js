import { handleSubmit } from "../js/formHandler.js";
import "babel-polyfill";

describe("Testing handleSubmit() function", () => {
  test("Testing handleSubmit() function should exist", () => {
    expect(handleSubmit).toBeDefined();
  });

  test("Testing handleSubmit() should to be a function", () => {
    expect(typeof handleSubmit).toBe("function");
  });
});
