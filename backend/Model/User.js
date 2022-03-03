const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
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


