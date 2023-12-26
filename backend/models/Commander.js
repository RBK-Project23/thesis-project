// models/commander.js
const mongoose = require('mongoose');

const commanderSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  dateOfBirth: String,
  placeOfBirth: String,
  CIN: String,
  gender: String,
  isParent: String,
  fatherName: String,
  grandFatherName: String,
  maritalStatus: String, 
  addressTN: String,
  phoneTN: String,
  jobOM: String,
  jobTN: String,
  educationalLevel: String,
  certificate: String,
  scoutTrainingLevel: String,
  dateLastTrainingLevelStudy: String,
  profileImage: String,
 

 
});

const Commander = mongoose.model('commander', commanderSchema);

module.exports = Commander;