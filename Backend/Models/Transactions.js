import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
        {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        amount: {type: Number, required: true},
        TrxnNo: {type: Number, required: true, trim: true},
        paymentMethod: {type: String, required: true,},
        status: {type: String, enum:["Successful", "Failed"], required: true},
        remark: {type: String, minlength: 6},
        date: {type: Date, default: Date.now}
    }, 
    {timestamps: true}
)

const Transaction = mongoose.model('Transaction', transactionSchema)
export default Transaction;