const express = require("express");

const healthModule = require("../modules/health");
const accountModule = require("../modules/accounts");

const router = express.Router();

router.use("/", healthModule);
router.use("/accounts", accountModule);
    
module.exports = router;