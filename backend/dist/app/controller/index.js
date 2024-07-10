"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.getBlogs = exports.getBlog = exports.deleteBlog = exports.createBlog = exports.login = exports.signup = void 0;
const user_1 = require("./user");
Object.defineProperty(exports, "signup", { enumerable: true, get: function () { return user_1.signup; } });
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return user_1.login; } });
const blog_1 = require("./blog");
Object.defineProperty(exports, "createBlog", { enumerable: true, get: function () { return blog_1.createBlog; } });
Object.defineProperty(exports, "deleteBlog", { enumerable: true, get: function () { return blog_1.deleteBlog; } });
Object.defineProperty(exports, "getBlog", { enumerable: true, get: function () { return blog_1.getBlog; } });
Object.defineProperty(exports, "getBlogs", { enumerable: true, get: function () { return blog_1.getBlogs; } });
Object.defineProperty(exports, "updateBlog", { enumerable: true, get: function () { return blog_1.updateBlog; } });
