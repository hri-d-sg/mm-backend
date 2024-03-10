import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category Name is Required"],
      unique: true,
    },
    image: { type: String, required: [true, "Category Image is Required"] },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);
