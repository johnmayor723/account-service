const axios = require("axios");

const app = require("../../config/app.config");

const client = axios.create({
    baseURL: app.fineract.url,
    timeout: 30000,
    headers: {
        Authorization: `Bearer ${app.fineract.bearerToken}`,
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

class FineractClient {

    /**
     * Get a savings account by ID.
     */
    async getSavingsAccount(accountId) {
        const { data } = await client.get(
            `/savingsaccounts/${accountId}`
        );

        return data;
    }

    /**
     * Get a client by ID.
     */
    async getClient(clientId) {
        const { data } = await client.get(
            `/clients/${clientId}`
        );

        return data;
    }
}

module.exports = new FineractClient();