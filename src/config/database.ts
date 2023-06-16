import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(<string>process.env.DB_URI);
        console.log(`Connected to the database 🚀`);
    } catch (error) {
        console.log(`Error connecting to the database: ${error}`)
    }
}

export default connectDB;