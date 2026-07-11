const config = require("../../config/app.config");

const health = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Service is healthy.",
        data: {
            service: config.serviceName,
            version: config.version,
            environment: config.environment
        },
        meta: {
            timestamp: new Date().toISOString()
        }
    });
};

module.exports = {
    health
};
