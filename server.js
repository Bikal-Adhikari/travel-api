import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT || 7000;

// MongoDB connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

import morgan from "morgan";
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// middlewares
import cors from "cors";
app.use(express.json());
app.use(cors());

import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/data", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost:${PORT}`);
});
