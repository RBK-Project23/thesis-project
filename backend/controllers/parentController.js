// controllers/parentController.js
const multer = require('multer');
const path = require('path');
const Parent = require('../models/parent');

const storage = multer.diskStorage({
  destination: './parents/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, 
}).single('profileImage'); 

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

  upload(req, res, async function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error uploading file' });
    }

  try {
    const {  FirstName, LastName, age, dateOfBirth, Adress_OM, PhoneOM, adressTN, phoneTN, participatedTunisianScoutRegiment, CIN, gender, Blood_type, passportNumber, expiryDatePassport, visaNumber, expiryDateVisa, chronicDiseases } = req.body;
    const profileImage = req.file ? req.file.filename : null;
    const UserParent = new Parent({  FirstName, LastName, age, dateOfBirth, Adress_OM, PhoneOM, adressTN, phoneTN, participatedTunisianScoutRegiment, CIN, gender, Blood_type, passportNumber, expiryDatePassport, visaNumber, expiryDateVisa, chronicDiseases, profileImage  });
    await UserParent.save();
    console.log(req.body)

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
}

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
