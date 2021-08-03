import express from "express";
const morgan = require("morgan");
const cors = require("cors");
const { filterRouter, selectRouter, visitsRouter } = require("./routes");

const app = express();

app.use(cors());

//* Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/query", filterRouter);
app.use("/select", selectRouter);
app.use("/visits", visitsRouter);

module.exports = app;
