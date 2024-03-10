import express from "express";
import { CreateNewPayment } from "../controllers/PaymentController";

const router = express.Router();

router.post("/payment/process", CreateNewPayment);

export default router;
