require("express-async-errors");

const express = require("express");

const routes = require("./routes");

const notFoundMiddleware = require("./middleware/not-found.middleware");
const errorHandler = require("./middleware/error-handler.middleware");

const app = express();

app.disable("x-powered-by");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

/**
 * Must come after all routes.
 */
app.use(notFoundMiddleware);

/**
 * Must always be the last middleware.
 */
app.use(errorHandler);

module.exports = app;