const express = require("express");
const router = express.Router();
const User = require("../Model/User");
const { body, validator, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });

const  JWT_SECRET = process.env.JWT_SECRET;

// Create a user using:POST "/routes/auth". Doesn't require Login
router.post(
  "/",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name(min->3)").isLength({ min: 3 }),
    body("phone", "Enter a valid phone(min->10)").isLength({ min: 10 }),
    body("password", "Enter a valid password(min->5)").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      let phone = await User.findOne({ phone: req.body.phone });
      if (phone) {
        return res
          .status(400)
          .json({ errors: "A user with this phone number already exists" });
      }
      if (user) {
        return res
          .status(400)
          .json({ error: "A user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      secPassword = await bcrypt.hash(req.body.password, salt);
      // Create user
      user = User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: secPassword,
      })
      const data = {
        user:{
          id:user.id
        }
      }
      const authToken = jwt.sign(data,JWT_SECRET);
      console.log(authToken);
      res.json({authToken});
    } catch (error) {
      res.status(500).json({ error: "Internal server error create" });
    }
  }
);

// Authantic a user :POST "/routes/auth/login". Doesn't require Login
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // if entered value is not validated by express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = res.body;
      // let email = await User.findOne({ email });
      // if email not found
      if (!email) {
        return res.status(404).json({ Error: "Please try to user correct " });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

module.exports = router;
