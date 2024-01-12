const mongoose = require("mongoose");
const ScoutProgram = require("../models/ScoutProgram");

const axios = require("axios");

const geocodeAddress = async (address) => {
  try {
    const url = `https://nominatim.openstreetmap.org/search`;
    const response = await axios.get(url, {
      params: {
        q: address,
        format: "json",
        limit: 1,
      },
    });

    console.log("Geocoding response:", response.data);

    if (response.data.length === 0) {
      throw new Error(`No location found for the given address: ${address}`);
    }

    const { lat, lon } = response.data[0];
    return { lat, lon };
  } catch (error) {
    console.error("Geocoding error:", error); // For debugging
    throw error;
  }
};

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
  const { name, description, startDate, endDate, address, participants } =
    req.body;

  try {
    const coordinates = await geocodeAddress(address);
    const newScoutProgram = new ScoutProgram({
      name,
      description,
      startDate,
      endDate,
      address,
      location: coordinates,
      participants,
    });

    await newScoutProgram.save();
    res.status(201).json(newScoutProgram);
  } catch (error) {
    console.error(error);
    res.status(409).json({ message: error.message });
  }
};

exports.updateScoutProgram = async (req, res) => {
  const { id } = req.params;
  const { name, description, startDate, endDate, address, participants } =
    req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No ScoutProgram with id: ${id}`);
  }

  try {
    const coordinates = await geocodeAddress(address);
    const updatedScoutProgram = {
      name,
      description,
      startDate,
      endDate,
      address,
      location: coordinates,
      participants,
      _id: id,
    };

    await ScoutProgram.findByIdAndUpdate(id, updatedScoutProgram, {
      new: true,
    });
    res.json(updatedScoutProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteScoutProgram = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No ScoutProgram with id: ${id}`);
  }

  await ScoutProgram.findByIdAndDelete(id);
  res.json({ message: "ScoutProgram deleted successfully." });
};
