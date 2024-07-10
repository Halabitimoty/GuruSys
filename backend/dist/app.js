"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./app/routes");
const app = (0, express_1.default)();
exports.app = app;
const pathToStatic = node_path_1.default.join(__dirname, "../../frontend/dist");
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173/",
        "http://localhost:3004/",
        "http://localhost:5173",
        "http://localhost:3004",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}));
app.use(express_1.default.static(pathToStatic));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.router);
app.get("*", (req, res) => {
    res.sendFile(node_path_1.default.join(pathToStatic, "index.html"));
});
