import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;