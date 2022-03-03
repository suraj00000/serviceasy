const express = require("express");
const router = express.Router();
const User = require('../Model/User');

// Create a user using:POST "/routes/auth". Doesn't require Auth
router.post("/", (req, res) => {
  res.send(req.body);
  console.log(req.body);  

  const user = User(req.body);
  user.save();



});

module.exports = router;
