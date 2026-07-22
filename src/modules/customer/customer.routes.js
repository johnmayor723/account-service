const express = require("express");

const router = express.Router();

const controller = require("./customer.controller");

const validator = require("./customer.validator");

const validate = require("../../middleware/validation.middleware");

/**
 * Get Fineract client demographic info.
 */
router.get(
    "/internal/customer/:clientId",
    validator.getClient,
    validate,
    controller.getClient
);

/**
 * Get loan accounts for a client.
 */
router.get(
    "/internal/customer/:clientId/loans",
    validator.getLoans,
    validate,
    controller.getLoans
);

/**
 * Get transactions for a savings account.
 */
router.get(
    "/internal/customer/accounts/:accountId/transactions",
    validator.getTransactions,
    validate,
    controller.getTransactions
);

module.exports = router;
