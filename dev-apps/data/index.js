const mongoose = require("mongoose");
const data = require("./index.json");

async function seed() {
  const mongoDBUrl = "mongodb://localhost:27017/BankAccounts";

  async function mainConnection() {
    await mongoose.connect(mongoDBUrl);
  }

  mainConnection()
    .then(async () => {
      console.log("DB Connected");
      const TestSchemeModel = new mongoose.Schema({
        accountNumber: Number,
        type: String,
      });
      const TestModel = mongoose.model("accountOperations", TestSchemeModel);
      await TestModel.insertMany(data);
      setTimeout(() => {
        process.exit();
      }, 3000);
    })
    .catch(() => {
      console.log("ERROR DB not Connected");
    });
}

seed();
