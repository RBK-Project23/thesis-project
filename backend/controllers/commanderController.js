const Commander = require('../models/Commander');

const getAllCommanders = async (req, res) => {
  try {
    const commanders = await Commander.find();
    res.json(commanders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCommanderById = async (req, res) => {
  try {
    const commander = await Commander.findById(req.params.id);
    if (!commander) {
      return res.status(404).json({ error: 'Commander not found' });
    }
    res.json(commander);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addCommander = async (req, res) => {
  try {
    const newCommander = new Commander(req.body);
    const savedCommander = await newCommander.save();
    res.json(savedCommander);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateCommander = async (req, res) => {
  try {
    const updatedCommander = await Commander.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCommander) {
      return res.status(404).json({ error: 'Commander not found' });
    }
    res.json(updatedCommander);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteCommander = async (req, res) => {
  try {
    const deletedCommander = await Commander.findByIdAndDelete(req.params.id);
    if (!deletedCommander) {
      return res.status(404).json({ error: 'Commander not found' });
    }
    res.json(deletedCommander);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllCommanders,
  getCommanderById,
  addCommander,
  updateCommander,
  deleteCommander,
};

