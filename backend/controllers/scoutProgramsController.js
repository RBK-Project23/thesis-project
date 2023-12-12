const ScoutProgram = require('../models/ScoutProgram');

exports.getScoutPrograms = async (req, res) => {
  try {
    const scoutPrograms = await ScoutProgram.find();
    res.json(scoutPrograms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createScoutProgram = async (req, res) => {
  try {
    const newScoutProgram = new ScoutProgram(req.body);
    const savedScoutProgram = await newScoutProgram.save();
    res.status(201).json(savedScoutProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


