const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const app = express();
const mockAPIResponse = require("./mockAPI.js");
const fetch = require("node-fetch");

app.use(express.static("dist"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const port = 8000;
const server = app.listen(port, () => {
  console.log(`server is running`);
  console.log(`running on localhost: ${port}`);
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";
const MEAN_CLOUD_API_KEY = process.env.API_KEY;

app.post("/url-Analyzer", async (req, res) => {
  try {
    const url = req.body.url;
    const API_url = `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`;
    console.log(API_url);
    const response = await fetch(API_url);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8010, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${port}!`);
});

module.exports = { app };
