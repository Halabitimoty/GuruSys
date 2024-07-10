"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/signup", controller_1.signup);
router.post("/login", controller_1.login);
router.post("/createblog", authMiddleware_1.authMiddleware, controller_1.createBlog);
router.get("/blog", authMiddleware_1.authMiddleware, controller_1.getBlogs);
router.get("/userblog", authMiddleware_1.authMiddleware, controller_1.getBlog);
router.put("/updateblog/:id", authMiddleware_1.authMiddleware, controller_1.updateBlog);
router.delete("/deleteblog/:id", authMiddleware_1.authMiddleware, controller_1.deleteBlog);