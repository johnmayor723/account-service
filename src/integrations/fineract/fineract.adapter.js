const client = require("./fineract.client");

class FineractAdapter {

    /**
     * Retrieve account information from Fineract.
     *
     * This adapter hides the fact that we make two
     * Fineract API calls (Savings Account + Client)
     * and returns one normalized object to the
     * Account Service.
     */
    async getAccount(fineractAccountId) {

        const savings =
            await client.getSavingsAccount(
                fineractAccountId
            );

        const customer =
            await client.getClient(
                savings.clientId
            );

        return {

            /**
             * Savings Account
             */
            id: String(savings.id),

            accountNo: savings.accountNo,

            /**
             * Client
             */
            clientId: String(customer.id),

            displayName:
                customer.displayName,

            firstname:
                customer.firstname,

            middlename:
                customer.middlename || null,

            lastname:
                customer.lastname,

            mobileNo:
                customer.mobileNo || null,

            emailAddress:
                customer.emailAddress || null,

            active:
                customer.active === true

        };

    }

}

module.exports = new FineractAdapter();