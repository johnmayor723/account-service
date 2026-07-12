const mongoose = require("mongoose");

const AccountMappingSchema = new mongoose.Schema(
    {
        /**
         * NUBAN Account Number
         */
        accountNumber: {
            type: String,
            required: true,
            unique: true,
            index: true,
            trim: true
        },

        /**
         * Fineract Savings Account ID
         */
        fineractAccountId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },

        /**
         * Fineract Client ID
         */
        clientId: {
            type: String,
            required: true,
            index: true
        },

        /**
         * Customer Name
         */
        firstName: {
            type: String,
            required: true,
            trim: true
        },

        middleName: {
            type: String,
            default: null,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        /**
         * Cached full name for fast name enquiry
         */
        accountName: {
            type: String,
            required: true,
            uppercase: true,
            trim: true,
            index: true
        },

        /**
         * Contact Information
         */
        phoneNumber: {
            type: String,
            required: true,
            index: true
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true
        },

        /**
         * Account Information
         */
        accountType: {
            type: String,
            enum: [
                "SAVINGS",
                "CURRENT",
                "FIXED_DEPOSIT"
            ],
            default: "SAVINGS"
        },

        currency: {
            type: String,
            default: "NGN"
        },

        /**
         * Mapping Status
         */
        status: {
            type: String,
            enum: [
                "ACTIVE",
                "INACTIVE",
                "BLOCKED",
                "CLOSED"
            ],
            default: "ACTIVE",
            index: true
        }
    },
    {
        timestamps: true,
        collection: "account_mappings"
    }
);

module.exports =
    mongoose.models.AccountMapping ||
    mongoose.model("AccountMapping", AccountMappingSchema);
