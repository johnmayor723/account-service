const client = require("./fineract.client");

class FineractAdapter {

    /**
     * Fetch account information required by the
     * Account Service.
     */
    async getAccount(accountId) {

        const savings =
            await client.getSavingsAccount(accountId);

        const customer =
            await client.getClient(savings.clientId);

        return {

            fineractAccountId: String(savings.id),

            clientId: String(customer.id),

            accountNumber:
                savings.accountNo,

            accountType:
                (savings.depositType?.value || "SAVINGS")
                    .toUpperCase(),

            currency:
                savings.currency?.code || "NGN",

            status:
                savings.status?.active
                    ? "ACTIVE"
                    : "INACTIVE",

            firstName:
                customer.firstname,

            middleName:
                customer.middlename || null,

            lastName:
                customer.lastname,

            accountName:
                `${customer.firstname} 
${customer.lastname}`.toUpperCase(),

            phoneNumber:
                customer.mobileNo,

            email:
                customer.emailAddress
        };

    }

}

module.exports = new FineractAdapter();
