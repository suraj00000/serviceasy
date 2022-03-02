const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    a: "suraj kushwaha",
    number: 765,
  };
  res.json(obj);
});

module.exports = router;
