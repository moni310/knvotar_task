const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({

  bookName: { type: String},
  bookPrize: { type: String },
  Authorname: { type: String},
  Createdby: { type: String },
  time : { type : Date, default: Date.now }

});


module.exports = mongoose.model("book", booksSchema);


