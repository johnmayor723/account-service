const accountRepository = require("./account.repository");

const {
    ConflictError,
    NotFoundError
} = require("../../errors");

const {
    adapter
} = require("../../integrations/fineract");

class AccountService {

    /**
     * Create a new account mapping.
     */
    async createMapping(data) {

        const accountExists =
            await accountRepository.existsByAccountNumber(
                data.accountNumber
            );

        if (accountExists) {
            throw new ConflictError(
                "Account number already exists."
            );
        }

        const fineractExists =
            await accountRepository.existsByFineractAccountId(
                data.fineractAccountId
            );

        if (fineractExists) {
            throw new ConflictError(
                "Fineract account is already mapped."
            );
        }

        return accountRepository.create(data);
    }

    /**
     * Get mapping by account number.
     */
    async getByAccountNumber(accountNumber) {

        const account =
            await accountRepository.findByAccountNumber(
                accountNumber
            );

        if (!account) {
            throw new NotFoundError(
                "Account mapping not found."
            );
        }

        return account;
    }

    /**
     * Get mappings by client ID.
     */
    async getByClientId(clientId) {
        return accountRepository.findByClientId(clientId);
    }

    /**
     * Get mapping by Fineract account ID.
     */
    async getByFineractAccountId(
        fineractAccountId
    ) {

        const account =
            await accountRepository.findByFineractAccountId(
                fineractAccountId
            );

        if (!account) {
            throw new NotFoundError(
                "Account mapping not found."
            );
        }

        return account;
    }

    /**
     * Name enquiry.
     */
    async nameEnquiry(accountNumber) {

        const account =
            await accountRepository.findByAccountNumber(
                accountNumber
            );

        if (!account) {
            throw new NotFoundError(
                "Account not found."
            );
        }

        return {
            accountNumber: account.accountNumber,
            accountName: account.accountName,
            status: account.status
        };
    }
    /**
 * Synchronize account mapping from Fineract.
 */
async syncAccount(fineractAccountId) {

    const account =
        await adapter.getAccount(
            fineractAccountId
        );

    const exists =
        await accountRepository.existsByFineractAccountId(
            fineractAccountId
        );

    if (!exists) {

        return accountRepository.create(account);

    }

    return accountRepository.updateByFineractAccountId(
        fineractAccountId,
        account
    );

}
    /**
     * Validate account ownership.
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
            throw new NotFoundError(
                "Account not found."
            );
        }

        const emailMatched =
            account.email.toLowerCase() ===
            email.toLowerCase();

        const phoneMatched =
            account.phoneNumber === phoneNumber;

        return {
            matched: emailMatched && phoneMatched
        };
    }
}

module.exports = new AccountService();