const express = require("express");

const controller = require("./account.controller");

const validate = require("../../middleware/validation.middleware");

const {
    createMapping,
    validateAccount,
    nameEnquiry,
    syncAccount
} = require("./validators");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public APIs
|--------------------------------------------------------------------------
*/

/**
 * Validate ownership during Internet Banking registration.
 */
router.post(
    "/accounts/validate",
    validateAccount,
    validate,
    controller.validateAccount
);

/**
 * Name enquiry.
 */
router.get(
    "/accounts/name-enquiry/:accountNumber",
    nameEnquiry,
    validate,
    controller.nameEnquiry
);

/*
|--------------------------------------------------------------------------
| Internal APIs
|--------------------------------------------------------------------------
*/

/**
 * Create account mapping.
 */
router.post(
    "/internal/accounts",
    createMapping,
    validate,
    controller.createMapping
);

/**
 * Find by account number.
 */
router.get(
    "/internal/accounts/:accountNumber",
    controller.getByAccountNumber
);

/**
 * Find by client ID.
 */
router.get(
    "/internal/accounts/client/:clientId",
    controller.getByClientId
);

/**
 * Find by Fineract Account ID.
 */
router.get(
    "/internal/accounts/fineract/:fineractAccountId",
    controller.getByFineractAccountId
);

/**
 * Synchronize account from Fineract.
 */
router.post(
    "/internal/accounts/sync",
    syncAccount,
    validate,
    controller.syncAccount
);

module.exports = router;
