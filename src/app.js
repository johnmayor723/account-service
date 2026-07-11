require("express-async-errors");

const express = require("express");

const routes = require("./routes");

const app = express();

app.disable("x-powered-by");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

module.exports = app;
