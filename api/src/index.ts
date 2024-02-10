import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { initConnection } from "./db/connection";
import { operationsRouter } from "./accountOperations/route";

dotenv.config();
initConnection();
const app = express();
app.use(cors());
app.use(bodyParser());

app.get("/health-check", (req, res) => {
  res.json({ message: "API IS RUNNING" });
});

app.use("/operations", operationsRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log({ message: err.message });
  res.status(500).send("Something went wrong");
});

app.listen(process.env.PORT, () => {
  console.log(`Application is running on ${process.env.PORT}`);
});
