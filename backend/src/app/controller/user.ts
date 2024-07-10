import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/auth";

import { User } from "../model";

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const isuser = await User.findOne({ username });

    if (isuser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, password: hashedPassword });

    res
      .status(201)
      .json({ message: `User ${user.username} created successfully` });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = generateToken(user.id);

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
