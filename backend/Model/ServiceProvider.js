const mongoose = require("mongoose");
// TODO: add a unique field in required parameter
const ServiceProviderSchema = new mongoose.Schema({
  owner_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  organization_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true

  },
  Date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("SERVICE_PROVIDER",ServiceProviderSchema);
