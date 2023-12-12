const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from your Express server!");
});

const CONNECTION_URL = "mongodb://localhost:27017/scoutTunisian";
const PORT = process.env.PORT || 7000;

// Updated MongoDB connection
mongoose.connect(CONNECTION_URL)
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
