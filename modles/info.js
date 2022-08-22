const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  firstName: { type: String},
  lasName: { type: String },
  Email: { type: String},
  phoneNo:{ type: String },
  password:{type:String},
  address:{type:String} 


});


module.exports = mongoose.model("Users", UserSchema);

