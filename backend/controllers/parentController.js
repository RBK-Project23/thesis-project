// controllers/parentController.js
const Parent = require('../models/Parent');

const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.find();
    res.json(parents);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getParentById = async (req, res) => {
  try {
    const parent = await Parent.findById(req.params.id);
    if (!parent) {
      return res.status(404).json({ error: 'Parent not found' });
    }
    res.json(parent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const RegisterParent= async (req, res) => {

 
  try {
    const {  FirstName, LastName, age, dateOfBirth, Adress_OM, PhoneOM, adressTN, phoneTN, participatedTunisianScoutRegiment, CIN, gender, Blood_type, passportNumber, expiryDatePassport, visaNumber, expiryDateVisa, chronicDiseases } = req.body;
    const UserParent = new Parent({  FirstName, LastName, age, dateOfBirth, Adress_OM, PhoneOM, adressTN, phoneTN, participatedTunisianScoutRegiment, CIN, gender, Blood_type, passportNumber, expiryDatePassport, visaNumber, expiryDateVisa, chronicDiseases  });
    await UserParent.save();
    console.log(req.body)

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateParent = async (req, res) => {
  try {
    const updatedParent = await Parent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedParent) {
      return res.status(404).json({ error: 'Parent not found' });
    }
    res.json(updatedParent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteParent = async (req, res) => {
  try {
    const deletedParent = await Parent.findByIdAndDelete(req.params.id);
    if (!deletedParent) {
      return res.status(404).json({ error: 'Parent not found' });
    }
    res.json(deletedParent);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllParents,
  getParentById,
  RegisterParent,
  updateParent,
  deleteParent,
};
