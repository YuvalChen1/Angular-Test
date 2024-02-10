import { AccountOperationsModel } from "../../db/models/accountOperations";

interface IOperations {
  accountNumber: number;
  action: string;
  amount: number;
  interest?: number;
  payments?: number;
}

async function addOperationApi(operationsObj: IOperations) {
  const newOperation = new AccountOperationsModel(operationsObj);
  await newOperation.save();
  return newOperation;
}

export { addOperationApi };
