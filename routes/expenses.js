import express from "express";

import Expense from "../models/Expense.js";

const expenseRouter = express.Router();

expenseRouter.post("/new", (req, res) => {
    const { date, amount, category, description } = req.body;

    

    const newExpense = new Expense({ date, amount, category, description })

    newExpense.save();

    res.send("Successfully added!");
});

//route to view expenses history
expenseRouter.get("/expenses/all", (req, res) => {
    res.send(expenses);
});

expenseRouter.get("/expenses/filter", (req, res) => {
    const { date, category } = req.query;

    if(!date && !category){
        res.send(expenses);
    }

    const filterExpenses = expenses.filter(expense => expense.category === category);
    let totalSpending = 0;
    filterExpenses.forEach(expense => totalSpending += expense.amount)

    
    res.json({totalSpending, category, history: filterExpenses});
})

export default expenseRouter;