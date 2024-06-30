import mongoose from "mongoose";

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/expense";

export const connectDB = async () => {
    try {
        await mongoose.connect(URI)
    } catch (error) {
        console.log(error);
    }
    
}
