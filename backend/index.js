const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require('express-session');
const passport = require("passport");
require('./models/passportConfig');
require("dotenv").config();

const app = express();

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from your Express server!");
});

const postRoutes = require('./routes/posts');
const scoutProgramRoutes = require('./routes/scoutPrograms');
const userlogin = require('./routes/userlogin');
const scoutRoutes = require('./routes/scoutRoutes');
const commanderRoutes = require('./routes/commanderRoutes');
const parentRoutes = require('./routes/parentRoutes');

app.use('/posts', postRoutes);
app.use('/scoutprograms', scoutProgramRoutes);
app.use('/users', userlogin);
app.use('/scouts', scoutRoutes);
app.use('/commanders', commanderRoutes);
app.use('/parents', parentRoutes);

const CONNECTION_URL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/scoutTunisian";
const PORT = process.env.PORT || 7000;

mongoose.connect(CONNECTION_URL)
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
