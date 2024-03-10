import express from "express";
import {
  CreateNewProduct,
  DeleteProductById,
  GetAdvertisedProducts,
  GetProductsByCategory,
  GetProductsBySellerEmail,
  GetReportedProducts,
  ToggleAdvertiseMode,
  ToggleProductReportOption,
} from "../controllers/ProductController";
import ValidateId from "../middlewares/ValidateId";
import VerifyAdmin from "../middlewares/VerifyAdmin";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifySeller from "../middlewares/VerifySeller";
import VerifyUser from "../middlewares/VerifyUser";

const router = express.Router();

router.route("/products/advertised").get(GetAdvertisedProducts);
router.route("/products/:category").get(GetProductsByCategory);
router
  .route("/product/report")
  .patch(VerifyJwt, VerifyUser, ToggleProductReportOption);

router
  .route("/seller/product/new")
  .post(VerifyJwt, VerifySeller, CreateNewProduct);

router
  .route("/seller/products/:email")
  .get(VerifyJwt, VerifySeller, GetProductsBySellerEmail);

router
  .route("/seller/product/:id")
  .patch(ValidateId, VerifyJwt, VerifySeller, ToggleAdvertiseMode);

router
  .route("/seller/product/:id")
  .delete(ValidateId, VerifyJwt, VerifyUser, DeleteProductById);

router
  .route("/admin/products/reported")
  .get(VerifyJwt, VerifyAdmin, GetReportedProducts);

export default router;
