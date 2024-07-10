import path from "node:path";
import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import { router } from "./app/routes";

const app = express();
const pathToStatic = path.join(__dirname, "../../frontend/dist");

app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "http://localhost:5173/",
      "http://localhost:3004/",
      "http://localhost:5173",
      "http://localhost:3004",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.static(pathToStatic));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(pathToStatic, "index.html"));
});

export { app };
