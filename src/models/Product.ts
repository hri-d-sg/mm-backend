import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Product Name is Required"],
      trim: true,
    },
    image: { type: String, required: [true, "Product Image is Required"] },
    originalPrice: {
      type: Number,
      required: [true, "Product Original Price is Required"],
    },
    resalePrice: {
      type: Number,
      required: [true, "Product Resale Price is Required"],
    },
    condition: {
      type: String,
      enum: ["excellent", "good", "fair"],
      required: [true, "Condition is Required"],
    },
    yearOfUse: { type: Number, required: [true, "Year of use is Required"] },
    location: { type: String, required: [true, "Location is Required"] },
    description: { type: String, required: [true, "Description is Required"] },
    category: {
      type: String,
      required: [true, "Category Id is Required"],
    },
    status: {
      type: String,
      enum: ["available", "sold"],
      default: "available",
    },
    isAdvertised: {
      type: Boolean,
      default: "false",
    },
    sellerName: {
      type: String,
      required: [true, "Seller Name is Required"],
    },
    sellerEmail: {
      type: String,
      required: [true, "Seller Email is Required"],
    },
    isSellerVerified: {
      type: Boolean,
      default: false,
    },
    isReported: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
