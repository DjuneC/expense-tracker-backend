import express from "express";

const expenseRouter = express.Router();

expenseRouter.post("/expenses/new", (req, res) => {
    const { date, amount, category, description } = req.body;

    expenses.push({ date, amount, category, description });

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