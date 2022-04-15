const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path:  `${__dirname}/../.env.local`});

const mongoURL = process.env.DATABASE;

const connectToMongo = () => {
  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("Connected to mongoose sucessfully");
    })
    .catch((err) => console.log("no connecion"));
};
module.exports = connectToMongo;
