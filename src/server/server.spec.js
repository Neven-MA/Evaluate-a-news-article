import "babel-polyfill";
import { app } from "./index.js";
const request = require("supertest");

describe("Testing ther server", () => {
  test("It should response to get request", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("It should response to post request", async () => {
    const response = await request(app).post("/url-Analyzer");
    expect(response.statusCode).toBe(200);
  });
});
