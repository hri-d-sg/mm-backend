import express from "express";
import {
  CreateNewOrder,
  GetOrderById,
  GetOrdersByEmail,
} from "../controllers/OrderController";
import ValidateId from "../middlewares/ValidateId";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifyUser from "../middlewares/VerifyUser";

const router = express.Router();

router.route("/orders").get(VerifyJwt, VerifyUser, GetOrdersByEmail);
router.route("/order/new").post(VerifyJwt, VerifyUser, CreateNewOrder);

router.route("/order/:id").get(ValidateId, VerifyJwt, VerifyUser, GetOrderById);

export default router;
