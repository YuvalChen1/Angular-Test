import { AccountOperationsModel } from "../../db/models/accountOperations";

async function getOperationsByAccountNumber(accountNumber: number) {
  try {
    const operations = await AccountOperationsModel.find({ accountNumber });
    return operations;
  } catch (error) {
    throw error;
  }
}

export { getOperationsByAccountNumber };
