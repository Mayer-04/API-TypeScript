import express from "express";
import cors from "cors";
import "dotenv/config";
import { compression, helmet, morgan } from "./plugins/index";
import userRouter from "./routes/user.routes";
import connectDB from "./config/database";

const app = express();
const PORT = process.env.PORT ?? 5001;

// ! Seguridad
app.disable("x-powered-by");
app.use(helmet());

app.use(express.json());
app.use(compression());
app.use(cors());
app.use(morgan("dev"));

app.use(userRouter);

//* Base de datos
connectDB();

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
