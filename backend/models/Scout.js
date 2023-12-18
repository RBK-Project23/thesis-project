const mongoose = require('mongoose');
const User = require('./User');

const scoutSchema = new mongoose.Schema({
    age: { type: Number },
    date_birth: { type: Date },
    passport_number: { type: String },
    ExpiryDateP: { type: Date },
    gender: { type: String },
    Visa_number: { type: String },
    ExpiryDateV: { type: Date },
    chronicDiseases: { type: String },});

const Scout = User.discriminator('Scout', scoutSchema);

module.exports = Scout;
