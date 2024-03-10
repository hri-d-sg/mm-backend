import { NextFunction, Request, Response } from "express";
import { QueryUser } from "../services/UserService";

const VerifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const decodedEmail = req.decoded.email;
  const user = await QueryUser(decodedEmail);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  req.userRole = user.role;
  next();
};

export default VerifyUser;
