const accountService = require("./account.service");

const { success } = require("../../responses/api.response");

/**
 * Create Account Mapping
 */
const createMapping = async (req, res) => {

    const account =
        await accountService.createMapping(req.body);

    return success(res, {
        message: "Account mapping created successfully.",
        data: account
    });

};

/**
 * Validate Account Ownership
 */
const validateAccount = async (req, res) => {

    const result =
        await accountService.validateOwnership(req.body);

    return success(res, {
        message: "Account validation completed.",
        data: result
    });

};

/**
 * Name Enquiry
 */
const nameEnquiry = async (req, res) => {

    const result =
        await accountService.nameEnquiry(
            req.params.accountNumber
        );

    return success(res, {
        message: "Name enquiry successful.",
        data: result
    });

};

/**
 * Get By Account Number
 */
const getByAccountNumber = async (req, res) => {

    const account =
        await accountService.getByAccountNumber(
            req.params.accountNumber
        );

    return success(res, {
        message: "Account retrieved successfully.",
        data: account
    });

};

/**
 * Get By Client ID
 */
const getByClientId = async (req, res) => {

    const accounts =
        await accountService.getByClientId(
            req.params.clientId
        );

    return success(res, {
        message: "Accounts retrieved successfully.",
        data: accounts
    });

};

/**
 * Get By Fineract Account ID
 */
const getByFineractAccountId = async (req, res) => {

    const account =
        await accountService.getByFineractAccountId(
            req.params.fineractAccountId
        );

    return success(res, {
        message: "Account retrieved successfully.",
        data: account
    });

};
/**
 * Synchronize account from Fineract.
 */
const syncAccount = async (req, res) => {

    const account =
        await accountService.syncAccount(
            req.body.fineractAccountId
        );

    return success(res, {
        message: "Account synchronized successfully.",
        data: account
    });

};

module.exports = {

    createMapping,

    validateAccount,

    nameEnquiry,

    getByAccountNumber,

    getByClientId,

    getByFineractAccountId,

    syncAccount

};
