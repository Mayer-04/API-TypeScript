import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";
import userRouter from "./routes/user.routes";
import connectDB from "./config/database";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(userRouter);

// Base de datos
connectDB();

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});