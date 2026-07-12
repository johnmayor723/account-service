const AccountMapping = require("./account.model");

class AccountRepository {

    /**
     * Create a new account mapping.
     */
    async create(data) {
        return AccountMapping.create(data);
    }

    /**
     * Find by account number.
     */
    async findByAccountNumber(accountNumber) {
        return AccountMapping.findOne({
            accountNumber
        });
    }

    /**
     * Find by Fineract account ID.
     */
    async findByFineractAccountId(fineractAccountId) {
        return AccountMapping.findOne({
            fineractAccountId
        });
    }

    /**
     * Find all accounts belonging to a client.
     */
    async findByClientId(clientId) {
        return AccountMapping.find({
            clientId
        });
    }

    /**
     * Find by email.
     */
    async findByEmail(email) {
        return AccountMapping.findOne({
            email: email.toLowerCase()
        });
    }

    /**
     * Find by phone number.
     */
    async findByPhoneNumber(phoneNumber) {
        return AccountMapping.findOne({
            phoneNumber
        });
    }

    /**
     * Update by MongoDB ID.
     */
    async update(id, updateData) {
        return AccountMapping.findByIdAndUpdate(
            id,
            updateData,
            {
                new: true,
                runValidators: true
            }
        );
    }

    /**
     * Update by Fineract Account ID.
     */
    async updateByFineractAccountId(
        fineractAccountId,
        updateData
    ) {
        return AccountMapping.findOneAndUpdate(
            {
                fineractAccountId
            },
            updateData,
            {
                new: true,
                runValidators: true
            }
        );
    }

    /**
     * Delete by MongoDB ID.
     */
    async delete(id) {
        return AccountMapping.findByIdAndDelete(id);
    }

    /**
     * Check if account number exists.
     */
    async existsByAccountNumber(accountNumber) {
        return AccountMapping.exists({
            accountNumber
        });
    }

    /**
     * Check if Fineract account exists.
     */
    async existsByFineractAccountId(fineractAccountId) {
        return AccountMapping.exists({
            fineractAccountId
        });
    }

    /**
     * Check if email exists.
     */
    async existsByEmail(email) {
        return AccountMapping.exists({
            email: email.toLowerCase()
        });
    }

    /**
     * Check if phone exists.
     */
    async existsByPhoneNumber(phoneNumber) {
        return AccountMapping.exists({
            phoneNumber
        });
    }
}

module.exports = new AccountRepository();