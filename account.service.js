const accountRepository = require("./account.repository");

class AccountService {

    /**
     * Create a new account mapping.
     */
    async createMapping(data) {

        const existingAccount =
            await accountRepository.existsByAccountNumber(
                data.accountNumber
            );

        if (existingAccount) {
            throw new Error(
                "Account number already exists."
            );
        }

        const existingFineract =
            await accountRepository.existsByFineractAccountId(
                data.fineractAccountId
            );

        if (existingFineract) {
            throw new Error(
                "Fineract account already mapped."
            );
        }

        return accountRepository.create(data);
    }

    /**
     * Lookup by account number.
     */
    async getByAccountNumber(accountNumber) {
        return accountRepository.findByAccountNumber(
            accountNumber
        );
    }

    /**
     * Lookup by client ID.
     */
    async getByClientId(clientId) {
        return accountRepository.findByClientId(
            clientId
        );
    }

    /**
     * Lookup by Fineract account.
     */
    async getByFineractAccountId(
        fineractAccountId
    ) {
        return accountRepository.findByFineractAccountId(
            fineractAccountId
        );
    }

    /**
     * Name Enquiry.
     */
    async nameEnquiry(accountNumber) {

        const account =
            await accountRepository.findByAccountNumber(
                accountNumber
            );

        if (!account) {
            return null;
        }

        return {
            accountNumber: account.accountNumber,
            accountName: account.accountName,
            status: account.status
        };
    }

    /**
     * Validate ownership.
     */
    async validateOwnership({
        accountNumber,
        email,
        phoneNumber
    }) {

        const account =
            await accountRepository.findByAccountNumber(
                accountNumber
            );

        if (!account) {
            return {
                matched: false
            };
        }

        const emailMatched =
            account.email.toLowerCase() ===
            email.toLowerCase();

        const phoneMatched =
            account.phoneNumber === phoneNumber;

        return {
            matched:
                emailMatched &&
                phoneMatched
        };
    }
}

module.exports = new AccountService();
