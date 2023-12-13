const User = require('../models/User') ;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    register: async (req, res) => {
        try {
          const { email, password,confirmPassword, firstName, lastName } = req.body;
      
          if (password !== confirmPassword) {
            return res.status(400).send("Passwords do not match.");
          }
      
          const hashedPassword = await bcrypt.hash(password, 10);
      
          let user = new User({
            email,
            firstName,
            lastName,
            password: hashedPassword
           
          });
      
          user = await user.save();
          res.json({ message: "User registered", userId: user._id });
        } catch (error) {
          res.status(500).send(error.message);
        }
      },

      login: async (req, res) => {
        try {
          const { email, password } = req.body;
          const user = await User.findOne({ email: email });
      
          if (!user) {
            return res.status(404).send('User not found');
          }
      
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            return res.status(401).send('Invalid password');
          }
      
          const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
          res.json({ message: "Logged in successfully", token });
        } catch (error) {
          res.status(500).send(error.message);
        }
      },
      deleteUser: async (req, res) => {
        try {
          const { id } = req.params;
      
          const user = await User.findById(id);
      
          if (!user) {
            return res.status(404).send('User not found');
          }
      
          await user.remove();
          res.json({ message: 'User deleted successfully' });
        } catch (error) {
          res.status(500).send(error.message);
        }
      }
            


}