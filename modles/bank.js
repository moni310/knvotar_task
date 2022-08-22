const mongoose = require("mongoose");

let BankSchema = new mongoose.Schema({
  bankName: { type: String},
  bankIFSCCode: { type: String},
  branch: { type: String },
  accountNo: { type: String },
  
});




module.exports = mongoose.model("Bank", BankSchema);