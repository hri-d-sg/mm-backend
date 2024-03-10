import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema({
  username: { type: String, required: [true, "Username is Required"] },
  userEmail: { type: String, required: [true, "User Email is Required"] },
  userPhoneNo: {
    type: Number,
    required: [true, "Phone no is Required"],
  },
  productName: {
    type: String,
    required: [true, "Product Name is Required"],
  },
  productId: {
    type: String,
    required: [true, "Product Id is Required"],
  },
  productPrice: {
    type: Number,
    required: [true, "Product Price is Required"],
  },
  orderId: {
    type: String,
    required: [true, "Order Id is Required"],
  },
  paidAmount: { type: Number, required: [true, "Paid amount is Required"] },
  transactionId: {
    type: String,
    required: [true, "Transaction Id is Required"],
  },
  transactionStatus: {
    type: String,
    required: [true, "Transaction Status is Required"],
  },
});

export default mongoose.model("Payment", paymentSchema);
