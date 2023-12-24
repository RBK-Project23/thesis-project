// models/scout.js
const mongoose = require('mongoose');

const scoutSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  age: Number,
  dateOfBirth: String,
  Adress_OM: String,
  PhoneOM:String,
  Blood_type: String,
  passportNumber: String,
  expiryDatePassport: String,
  gender: String,
  visaNumber: String,
  expiryDateVisa: String,
  chronicDiseases: String,
  
});

const Scout = mongoose.model('scouts', scoutSchema);

module.exports = Scout;
