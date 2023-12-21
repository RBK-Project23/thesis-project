const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    age: String,
    dateOfBirth: String,
    Adress_OM: String,
    PhoneOM: String,
    adressTN: String,
    phoneTN: String,
    participatedTunisianScoutRegiment: String,
    CIN: String,
    gender: String,
    Blood_type: String,
    passportNumber: String,
    expiryDatePassport: String,
    visaNumber: String,
    expiryDateVisa: String,
    chronicDiseases: String,
});

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;