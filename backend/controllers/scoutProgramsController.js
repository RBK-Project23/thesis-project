const mongoose = require('mongoose');
const ScoutProgram = require('../models/ScoutProgram');

exports.getScoutPrograms = async (req, res) => {
  try {
    const scoutPrograms = await ScoutProgram.find();
    res.status(200).json(scoutPrograms);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getScoutProgram = async (req, res) => {
  const { id } = req.params;

  try {
    const scoutProgram = await ScoutProgram.findById(id);
    res.status(200).json(scoutProgram);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createScoutProgram = async (req, res) => {
  const newScoutProgram = new ScoutProgram(req.body);

  try {
    await newScoutProgram.save();
    res.status(201).json(newScoutProgram);
  } catch (error) {
    console.error(error);
    res.status(409).json({ message: error.message });
  }
};

exports.updateScoutProgram = async (req, res) => {
  const { id } = req.params;
  const { name, description, startDate, endDate, address, participants } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No ScoutProgram with id: ${id}`);
  }

  const updatedScoutProgram = { name, description, startDate, endDate, address, participants, _id: id };
  await ScoutProgram.findByIdAndUpdate(id, updatedScoutProgram, { new: true });

  res.json(updatedScoutProgram);
};

exports.deleteScoutProgram = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No ScoutProgram with id: ${id}`);
  }

  await ScoutProgram.findByIdAndDelete(id);
  res.json({ message: "ScoutProgram deleted successfully." });
};


