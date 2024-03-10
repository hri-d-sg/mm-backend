import express from "express";
import {
  CreateCategory,
  GetAllCategory,
} from "../controllers/CategoryController";
import VerifyAdmin from "../middlewares/VerifyAdmin";
import { VerifyJwt } from "../middlewares/VerifyJwt";

const router = express.Router();

router.route("/categories").get(GetAllCategory);
router.post("/admin/category/new", VerifyJwt, VerifyAdmin, CreateCategory);

export default router;
