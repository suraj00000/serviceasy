const express = require("express");
const router = express.Router();
const ServiceProvider = require("../Model/ServiceProvider");
const { body, validator, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// taking data from .env file
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const JWT_SECRET = process.env.JWT_SECRET;

// Create a user using:POST "/api/auth/serviceProvider/createUser". Doesn't require Auth
router.post(
  "/createUser",
  [
    //   validator code
    body("owner_name", "Enter a valid name(min->3)").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body(
      "organization_name",
      "Enter a valid Oragnizaton name(min->10)"
    ).isLength({ min: 10 }),
    body("address", "Enter a valid Address(min->5)").isLength({ min: 5 }),
    body("password", "Enter a valid password(min->5)").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      //   errors form the validator
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let email = await ServiceProvider.findOne({ email: req.body.email });
      if (email) {
        return res
          .status(400)
          .json({ errors: "Organization with this email already exists" });
      }
      // creating a object and storing in cluster'c collection
      // It returns promises if yes then save user data if no then in catch handlling the error
      const salt = await bcrypt.genSalt(10);
      secPassword = await bcrypt.hash(req.body.password, salt);

      provider = ServiceProvider.create({
        owner_name: req.body.owner_name,
        email: req.body.email,
        organization_name: req.body.organization_name,
        address: req.body.address,
        password: secPassword,
      });
      const data = {
        provider: {
          id: provider.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// Create a user using:POST "/api/auth/serviceProvider/login". Doesn't require Auth
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password(min->5)").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //   errors form the validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let serviceprovider = await ServiceProvider.findOne({ email });
      if (!serviceprovider) {
        return res
          .status(404)
          .json({ Error: "Please try to user correct credentials" });
      }
      const passwordCoampare = await bcrypt.compare(
        password,
        serviceprovider.password
      );
      if (!passwordCoampare) {
        return res
          .status(404)
          .json({ Error: "Please try to user correct credentials" });
      }
      const data = {
        serviceprovider: {
          id: serviceprovider.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

module.exports = router;
