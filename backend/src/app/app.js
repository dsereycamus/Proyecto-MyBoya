const express = require("express");
const morgan = require("morgan");
const router = require("../routes/router");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);
app.use("*", (req, res) => res.status(404).send("404"));

module.exports = app;
