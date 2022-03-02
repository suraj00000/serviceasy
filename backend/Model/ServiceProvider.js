const mongoose = require("mongoose");
const ServiceProvider = new mongoose.Schema({
  owner_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  organization_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Timing: {
    type: String,
    required: true,
  },
});
