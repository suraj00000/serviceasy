const dotenv = require('dotenv');
const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()

dotenv.config({path:'../config.env'});
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})