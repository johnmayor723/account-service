const express = require("express");

const controller = require("./account.controller");

const validate = require("../../middleware/validation.middleware");

const internalAuth = require("../../middleware/internal-auth.middleware");

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
    internalAuth,
    createMapping,
    validate,
    controller.createMapping
);

/**
 * Find by account number.
 */
router.get(
    "/internal/accounts/:accountNumber",
    internalAuth,
    controller.getByAccountNumber
);

/**
 * Find by client ID.
 */
router.get(
    "/internal/accounts/client/:clientId",
    internalAuth,
    controller.getByClientId
);

/**
 * Find by Fineract Account ID.
 */
router.get(
    "/internal/accounts/fineract/:fineractAccountId",
    internalAuth,
    controller.getByFineractAccountId
);

/**
 * Synchronize account from Fineract.
 */
router.post(
    "/internal/accounts/sync",
    internalAuth,
    syncAccount,
    validate,
    controller.syncAccount
);

module.exports = router;
