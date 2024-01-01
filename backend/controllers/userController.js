const User = require("../models/User");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    try {
      console.log(req.body);
      const {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        active,
        type_user,
        status,
      } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match.");
      }

      let user = new User({
        email,
        firstName,
        lastName,
        active,
        type_user,
        status,
      });

      User.register(user, password, (err, user) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        } else {
          passport.authenticate("local")(req, res, () => {
            res.json({ message: "User registered", userId: user._id });
          });
        }
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Login route
  login: async (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (!user) {
        return res.status(400).json({ message: info.message });
      }

      // User authenticated, proceed to generate JWT
      try {
        const token = jwt.sign(
          { id: user._id, email: user.email, type_user: user.type_user },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        // Send the token back to the client to store in local storage
        res.json({ message: "Logged in successfully", token });
        // res.redirect('/');
      } catch (error) {
        res.status(500).send(error.message);
      }
    })(req, res, next);
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findById(id);

      if (!user) {
        return res.status(404).send("User not found");
      }

      await user.remove();
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getuser: async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateStatus: async (req, res) => {
    try {
      const { email, status } = req.body;

      // Find the user by email and update the status
      const updatedUser = await User.findOneAndUpdate(
        { email: email },
        { status: status },
        { new: true } // This option returns the updated document
      );

      if (!updatedUser) {
        return res.status(404).send("User not found");
      }

      // Send the updated user back
      res.status(200).send(updatedUser);
    } catch (error) {
      // Handle errors
      res.status(500).send(error);
    }
  },
};
