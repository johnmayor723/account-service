const app = require("./app");

const { app: appConfig, logger } = require("./config");

const server = app.listen(appConfig.port, () => {
    logger.info({
        service: appConfig.serviceName,
        environment: appConfig.environment,
        version: appConfig.version,
        port: appConfig.port
    }, "Application started successfully.");
});

server.on("error", (error) => {
    logger.fatal(error, "Failed to start application.");
    process.exit(1);
});