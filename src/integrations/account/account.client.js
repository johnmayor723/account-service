const axios = require("axios");

const config = require("../../config/app.config");

const client = axios.create({

    baseURL: config.accountService.url,

    timeout: 30000,

    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }

});

class AccountClient {

    /**
     * ------------------------------------------------------
     * Validate Account Ownership
     * ------------------------------------------------------
     */
    async validateAccount(data) {

        const { data: response } =
            await client.post(
                "/accounts/validate",
                data
            );

        return response.data;

    }

    /**
     * ------------------------------------------------------
     * Get Account Mapping
     * ------------------------------------------------------
     */
    async getAccount(accountNumber) {

        const { data: response } =
            await client.get(
                `/accounts/internal/accounts/${accountNumber}`
            );

        return response.data;

    }

    /**
     * ------------------------------------------------------
     * Name Enquiry
     * ------------------------------------------------------
     */
    async nameEnquiry(accountNumber) {

        const { data: response } =
            await client.get(
                `/accounts/name-enquiry/${accountNumber}`
            );

        return response.data;

    }

}

module.exports = new AccountClient();
