import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

/**
 * Connect to MongoDB
 */

export const connectdb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MongoDB URI is not defined");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("---- MongoDB connected ----");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
