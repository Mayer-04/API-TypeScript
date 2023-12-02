import mongoose from "mongoose";

const connectDB = async () => {
  const connectionString = `${process.env.DB_URI}`;

  try {
    await mongoose.connect(connectionString);
    console.log(`Connected to the database 🚀`);
  } catch (error) {
    throw new Error(`Error connecting to the database: ${error}`);
  }
};

export default connectDB;
