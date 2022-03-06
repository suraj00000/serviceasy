const mongoose = require("mongoose");
const {Schema} = mongoose;
// TODO: add a unique field in required parameter
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  phone: {
    type: Number,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("USER3", UserSchema);


