
import dotenv from "dotenv";
import { connectdb } from "./app/database/db";
import { app } from "./app";

dotenv.config();

const port = process.env.PORT || 3000;

connectdb().then(() => {
  const server =  app.listen(port, () => {
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





