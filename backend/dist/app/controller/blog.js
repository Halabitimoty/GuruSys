"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.getBlog = exports.getBlogs = exports.createBlog = void 0;
const model_1 = require("../model");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, paragraph } = req.body;
        if (!title || !content || !paragraph) {
            return res
                .status(400)
                .json({ message: "Title, content and paragraph are required" });
        }
        const userId = req.userId;
        const user = yield model_1.Blog.create({
            title,
            content,
            paragraph,
            userId,
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.createBlog = createBlog;
const getBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield model_1.Blog.find();
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getBlogs = getBlogs;
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const blog = yield model_1.Blog.find({ userId });
        res.status(200).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getBlog = getBlog;
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, content, paragraph } = req.body;
        const blog = yield model_1.Blog.findByIdAndUpdate(id, { title, content, paragraph }, { new: true });
        res.status(200).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield model_1.Blog.findByIdAndDelete(id);
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.deleteBlog = deleteBlog;
