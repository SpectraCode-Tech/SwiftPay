import express from "express";
import cors from "cors";
import { connectDb } from "./database.js";
import userRoutes from "./Routes/userRoutes.js";
import transactionRoutes from "./Routes/transactionRoutes.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});


connectDb();

app.use(cors({
  origin: 'https://swift-pay-gules.vercel.app', // Replace with your ACTUAL frontend URL
  credentials: true
}));
app.use(express.json());






app.use("/api/users", userRoutes);
app.use("/api/users", transactionRoutes);

app.get("/", (req, res) => {
  res.send("SwiftPay API is running....");
});

app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
