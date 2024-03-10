import { Request, Response } from "express";
import Order from "../models/Order";
import Payment from "../models/Payment";
import Product from "../models/Product";

export const CreateNewPayment = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.create(req.body);

    if (payment) {
      await Product.findByIdAndUpdate(payment.productId, {
        status: "sold",
      });

      await Order.findByIdAndUpdate(payment.orderId, {
        orderStatus: "paid",
      });
      res.status(200).json({ success: true, data: payment });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
