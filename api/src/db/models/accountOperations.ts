import mongoose from "mongoose";

const { Schema } = mongoose;

const accountOperations = new Schema({
  accountNumber: Number,
  action: String,
  amount: Number,
  interest: {
    type: Number,
    default: 0.1, 
  },
  payments: Number, 
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const AccountOperationsModel = mongoose.model(
  "accountOperations",
  accountOperations
);

export { AccountOperationsModel };
