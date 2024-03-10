import { Request, Response } from "express";
import Category from "../models/Category";

export const GetAllCategory = async (req: Request, res: Response) => {
  try {
    const allCategory = await Category.find({});

    res.status(200).json({ success: true, data: allCategory });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const CreateCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json({ success: true, data: newCategory });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
