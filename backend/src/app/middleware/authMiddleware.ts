import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/auth";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: "Invalid token" });
  }

  (req as any).userId = decoded.userId;
  next();
};
