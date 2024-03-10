import { Request, Response } from "express";
import Product from "../models/Product";

export const GetProductsByCategory = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({
      category: req.params.category,
      status: "available",
    });

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const ToggleAdvertiseMode = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Not product found" });
    }

    if (product.status === "sold") {
      return res
        .status(403)
        .json({ success: false, message: "Forbidden Access" });
    }

    product.isAdvertised = !product.isAdvertised;

    await product.save();

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetProductsBySellerEmail = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ sellerEmail: req.params.email });

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetAdvertisedProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({
      status: req.query.status,
      isAdvertised: req.query.isAdvertised,
    });

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetReportedProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({
      isReported: true,
    });

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const CreateNewProduct = async (req: Request, res: Response) => {
  if (req.body?.isSellerVerified) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const products = await Product.create(req.body);

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const DeleteProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const ToggleProductReportOption = async (
  req: Request,
  res: Response
) => {
  try {
    const product = await Product.findById(req.query.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Not product found" });
    }
    if (req.query.report === "report") {
      product.isReported = true;
    } else if (req.query.report === "cancel") {
      product.isReported = false;
    }

    await product.save();
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
