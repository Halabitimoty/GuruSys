import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  signup,
  login,
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controller";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/createblog", authMiddleware, createBlog);
router.get("/blog", authMiddleware, getBlogs);
router.get("/userblog", authMiddleware, getBlog);
router.put("/updateblog/:id", authMiddleware, updateBlog);
router.delete("/deleteblog/:id", authMiddleware, deleteBlog);

export { router };
