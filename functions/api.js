const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = app.Router();

router.get("/", (req, res) => {
  res.json({ hello: "hello" });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
