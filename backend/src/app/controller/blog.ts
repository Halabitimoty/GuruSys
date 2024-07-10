import { Request, Response } from "express";
import { Blog } from "../model";

const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, paragraph } = req.body;

    if (!title || !content || !paragraph) {
      return res
        .status(400)
        .json({ message: "Title, content and paragraph are required" });
    }

    const userId = (req as any).userId;

    const user = await Blog.create({
      title,
      content,
      paragraph,
      userId,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getBlog = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const blog = await Blog.find({ userId });

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { title, content, paragraph } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, content, paragraph },
      { new: true }
    );
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createBlog, getBlogs, getBlog, updateBlog, deleteBlog };
