const AccountMapping = require("./account.model");

class AccountRepository {

    /**
     * Create a new account mapping.
     */
    async create(data) {
        return AccountMapping.create(data);
    }

    /**
     * Find by NUBAN account number.
     */
    async findByAccountNumber(accountNumber) {
        return AccountMapping.findOne({
            accountNumber
        });
    }

    /**
     * Find by Fineract savings account ID.
     */
    async findByFineractAccountId(fineractAccountId) {
        return AccountMapping.findOne({
            fineractAccountId
        });
    }

    /**
     * Find by Fineract client ID.
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
     * Update an account mapping by ID.
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
     * Delete an account mapping by ID.
     */
    async delete(id) {
        return AccountMapping.findByIdAndDelete(id);
    }

    /**
     * Check whether an account number already exists.
     */
    async existsByAccountNumber(accountNumber) {
        return AccountMapping.exists({
            accountNumber
        });
    }

    /**
     * Check whether a Fineract account already exists.
     */
    async existsByFineractAccountId(fineractAccountId) {
        return AccountMapping.exists({
            fineractAccountId
        });
    }

    /**
     * Check whether an email already exists.
     */
    async existsByEmail(email) {
        return AccountMapping.exists({
            email: email.toLowerCase()
        });
    }

    /**
     * Check whether a phone number already exists.
     */
    async existsByPhoneNumber(phoneNumber) {
        return AccountMapping.exists({
            phoneNumber
        });
    }
}

module.exports = new AccountRepository();
