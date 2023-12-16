import mongoose from "mongoose";
import { envs } from "./plugins/envs";

const connectDB = async () => {
  const { DB_URI } = envs;

  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to the database 🚀`);
  } catch (error) {
    throw new Error(`Error connecting to the database: ${error}`);
  }
};

export default connectDB;
