import TransactionModel from "../model/TransactionModel.js";

export const getTransactions = async (req, res) => {

    try {
        const transactions = await TransactionModel.find()
        res.status(200).json(transactions)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const createTransaction = async (req, res) => {

    const transaction = new TransactionModel(req.body)

    try {
        await transaction.save()
        res.status(201).json(transaction)
    } catch (error) {
        res.status(409).json({ message: error.message }) //409: conflict
    }

}