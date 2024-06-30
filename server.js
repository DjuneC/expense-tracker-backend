import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import { connectDB } from "./config/dbConnection.js";
import expenseRouter from "./routes/expenses.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

//route concerning expenses
app.use("/expenses/", expenseRouter)

connectDB()
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server is up and listening at http://localhost:${PORT}`);
    });
    })
    .catch(error => {
        console.log("Error connecting to database:", error);
    })
    
