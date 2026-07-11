const app = require("./app");

const { app: appConfig } = require("./config");

app.listen(appConfig.port, () => {
    console.log("");

    console.log("========================================");
    console.log(`${appConfig.serviceName}`);
    console.log("========================================");
    console.log(`Environment : ${appConfig.environment}`);
    console.log(`Port        : ${appConfig.port}`);
    console.log(`Version     : ${appConfig.version}`);
    console.log("========================================");
    console.log("");
});