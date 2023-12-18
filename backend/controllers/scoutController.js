const Scout = require('../models/Scout');

const getAllScouts = async (req, res) => {
  try {
    const scouts = await Scout.find();
    res.json(scouts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getScoutById = async (req, res) => {
  try {
    const scout = await Scout.findById(req.params.id);
    if (!scout) {
      return res.status(404).json({ error: 'Scout not found' });
    }
    res.json(scout);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addScout = async (req, res) => {
  try {
    const newScout = new Scout(req.body);
    const savedScout = await newScout.save();
    res.json(savedScout);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateScout = async (req, res) => {
  try {
    const updatedScout = await Scout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedScout) {
      return res.status(404).json({ error: 'Scout not found' });
    }
    res.json(updatedScout);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteScout = async (req, res) => {
  try {
    const deletedScout = await Scout.findByIdAndDelete(req.params.id);
    if (!deletedScout) {
      return res.status(404).json({ error: 'Scout not found' });
    }
    res.json(deletedScout);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllScouts,
  getScoutById,
  addScout,
  updateScout,
  deleteScout,
};
