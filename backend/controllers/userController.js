const User = require('../models/userModel');

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { firstName, lastName }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getUser,
  updateUser,
};

