const dotenv = require("dotenv");
const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();

dotenv.config({ path: "../config.env" });
const port = process.env.PORT;

// if we wnat to use the req.body
app.use(express.json());

// Avalable routes
// Normal user or a client
app.use("/api/auth", require("./routes/auth"));
app.use("/api/auth/serviceProvider", require("./routes/authServiceProvider"));

app.get("/", (req, res) => {
  res.send("Service Easy Backend!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
