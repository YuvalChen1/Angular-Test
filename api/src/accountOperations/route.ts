import express, { Request, Response, NextFunction } from "express";
import { getOperationsByAccountNumber } from "./handlers/getOperation";
import { addOperationApi } from "./handlers/addOperation";

const operationsRouter = express.Router();

operationsRouter.get(
  "/:accountNumber",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber } = req.params;
      const result = await getOperationsByAccountNumber(accountNumber as any);
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  }
);

operationsRouter.post(
  "/new",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const { accountNumber, action, amount, interest, payments } = req.body;
      const operationData = {
        accountNumber,
        action,
        amount,
        interest,
        payments,
      };
      console.log(operationData);

      await addOperationApi(operationData);
      res.json({ message: "ok" });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
);

export { operationsRouter };
