import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import Transaction from "../Models/Transactions.js";

const router = express.Router();

router.get("/token-test", protect, (req, res) => {
  res.json({ message: "Token valid ✅", user: req.user.email });
});



// Store transaction
router.post("/transactions", protect, async (req, res) => {
  try {
    const { amount, paymentMethod, status, remark } = req.body;

    const TrxnNo = Date.now() + Math.floor(Math.random() * 1000);

    if (!amount || !paymentMethod || !status) {
      return res.status(400).json({
        message: "Amount, payment method, and status are required",
      });
    }

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
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
});

// Get logged-in user's transactions
router.get("/transactions", protect, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json({ transactions });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
});

// Admin get all
router.get("/all", protect, isAdmin, async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .sort({ createdAt: -1 })
      .populate("user", "name email");

    res.json({ transactions });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
});

router.get("/:id", protect, async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found ❌" });
    }

    res.json({ transaction });
  } catch (error) {
    res.status(500).json({ message: "Server error ❌", error: error.message });
  }
});

export default router;
