// controllers/scoutController.js
const multer = require('multer');
const path = require('path');
const Scout = require('../models/scout');

const storage = multer.diskStorage({
  destination: './scouts/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, 
}).single('profileImage'); 


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

const RegisterScout = async (req, res) => {

  upload(req, res, async function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error uploading file' });
    }

 
  try {
    const { FirstName, LastName, age, dateOfBirth, Adress_OM,  PhoneOM, Blood_type, passportNumber, expiryDatePassport, gender,  visaNumber, expiryDateVisa,   chronicDiseases } = req.body;

    const profileImage = req.file ? req.file.filename : null;
    
    const UserScout = new Scout({  FirstName, LastName, age, dateOfBirth, Adress_OM,  PhoneOM, Blood_type, passportNumber, expiryDatePassport, gender,  visaNumber, expiryDateVisa,   chronicDiseases, profileImage  });
    await UserScout.save();
    console.log(req.body)

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
}

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
  RegisterScout,
  updateScout,
  deleteScout,
 
};
