"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./app/routes");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.static(node_path_1.default.join(process.cwd(), "../frontend/dist")));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.router);
app.get("*", (req, res) => {
    res.sendFile(node_path_1.default.join(process.cwd(), "../frontend/dist/index.html"));
});
