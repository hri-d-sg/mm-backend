import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is Required"],
    },
    email: {
      type: String,
      required: [true, "User email is Required"],
      unique: true,
    },
    role: {
      type: String,
      enum: ["buyer", "seller", "admin"],
      default: "buyer",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
