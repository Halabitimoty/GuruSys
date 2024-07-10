import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "secret";

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, secret, { expiresIn: "1h" });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};
