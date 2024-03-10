import express from "express";
import {
  CreateNewUser,
  DeleteUser,
  GetUserRole,
  GetUsersByRole,
  UpdateUserRole,
} from "../controllers/UserController";
import { CheckExistingUser } from "../middlewares/CheckExistingUser";
import ValidateId from "../middlewares/ValidateId";
import VerifyAdmin from "../middlewares/VerifyAdmin";
import { VerifyJwt } from "../middlewares/VerifyJwt";
import VerifyUser from "../middlewares/VerifyUser";

const router = express.Router();

router.route("/admin/users").get(VerifyJwt, VerifyAdmin, GetUsersByRole);
router.route("/user/role").get(VerifyJwt, VerifyUser, GetUserRole);
router.route("/user/new").post(CheckExistingUser, CreateNewUser);

router
  .route("/admin/user/:id")
  .patch(ValidateId, VerifyJwt, VerifyAdmin, UpdateUserRole)
  .delete(ValidateId, VerifyJwt, VerifyAdmin, DeleteUser);

export default router;
