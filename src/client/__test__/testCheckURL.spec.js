import { checkURL } from "../js/checkURL.js";
import "babel-polyfill";

describe("Testing checkURL() function", () => {
  test("Testing checkURL() function should exist", () => {
    expect(checkURL).toBeDefined();
  });

  test("Testing checkURL() should to be a function", () => {
    expect(typeof checkURL).toBe("function");
  });

  test("Testing checkURL() for a valid URL", () => {
    expect(checkURL("http://www.google.com")).toBeTruthy();
  });

  test("Testing checkURL() for a invalid URL", () => {
    expect(checkURL("test")).toBeFalsy();
  });
});
