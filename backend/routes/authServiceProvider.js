const express = require("express");
const router = express.Router();
const ServiceProvider = require("../Model/ServiceProvider");
const { body, validator, validationResult } = require("express-validator");
const User = require("../Model/User");

// Create a user using:POST "/routes/auth". Doesn't require Auth
router.post(
  "/",
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
      ServiceProvider.create({
        owner_name: req.body.owner_name,
        email: req.body.email,
        organization_name: req.body.organization_name,
        address: req.body.address,
        password: req.body.password,
      })
        .then((user) => res.json(user))
        .catch((err) => {
          //   printing error in console
          console.log(err);
          // sending error if somwthing went wrong
          res.json({
            error: "please enter a unique user value",
            message: err.message,
          });
        });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);
module.exports = router;
