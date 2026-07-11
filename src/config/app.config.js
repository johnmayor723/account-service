require("dotenv").config();

const appConfig = {
    serviceName: process.env.SERVICE_NAME || "banking-platform-template",

    version: process.env.SERVICE_VERSION || "1.0.0",

    environment: process.env.NODE_ENV || "development",

    port: Number(process.env.PORT) || 3000,

    apiPrefix: process.env.API_PREFIX || "/api/v1"
};

module.exports = appConfig;