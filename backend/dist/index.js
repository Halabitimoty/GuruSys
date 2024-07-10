"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./app/database/db");
const app_1 = require("./app");
dotenv_1.default.config();
const port = process.env.PORT || 3000;
(0, db_1.connectdb)().then(() => {
    const server = app_1.app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
    process.on("SIGINT", () => {
        server.close(() => {
            console.log("---Server shutting down---");
            process.exit(0);
        });
    });
    process.on("uncaughtException", () => {
        server.close(() => {
            console.log("---Server shutting down---");
            process.exit(0);
        });
    });
});
