import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import Transaction from "../Models/Transactions.js"; // adjust path if needed


const router = express.Router();

// Route: Store transaction after payment
router.post("/transactions", protect, async (req, res) => {
  try {
    const { amount, paymentMethod, status, remark } = req.body;

    // Generate a unique transaction number (could be improved with UUID or sequence)
    const TrxnNo = Date.now() + Math.floor(Math.random() * 1000);

    // Basic validation
    if (!amount || !paymentMethod || !status) {
      return res.status(400).json({ message: "Amount, payment method, and status are required" });
    }

    // Create transaction record
    const transaction = await Transaction.create({
      user: req.user._id,
      amount,
      TrxnNo,
      paymentMethod,
      status,
      remark,
      date: new Date(),
    });

    res.status(201).json({
      message: "Transaction stored successfully ✅",
      transaction,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
});

// Authenticated: Get all transactions for the logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
});

// Admin-only: Get all transactions across all users
router.get("/all", protect, isAdmin, async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ createdAt: -1 }).populate("user", "name email");
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
});

// Authenticated: Get a single transaction by ID (only if it belongs to the user)
router.get("/:id", protect, async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ _id: req.params.id, user: req.user._id });
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found ❌" });
    }
    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
});

export default router;