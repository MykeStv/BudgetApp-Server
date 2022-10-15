import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    type: String,
    category: String,
    description: String,
    amount: {
        type: Number,
        default: 0
    }
})

const TransactionModel = mongoose.model('TransactionModel', transactionSchema)

export default TransactionModel