import express from "express";
import cors from "cors";
import { connectDb } from "./database.js";
import userRoutes from "./Routes/userRoutes.js";
import transactionRoutes from "./Routes/transactionRoutes.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = 5000;

connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/users", transactionRoutes);

app.get("/", (req, res) => {
  res.send("QuickPay API is running....");
});

app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
