const mongoose = require('mongoose');
const User = require('./User');

const commanderSchema = new mongoose.Schema({
    isParent: { type: Boolean },
    CIN: { type: String },
    fatherName: { type: String },
    grandfatherName: { type: String },
    gender: { type: String },
    date_birth: { type: Date },
    place_birth: { type: String },
    marital_status: { type: String, enum: ['single', 'married', 'divorced', 'widowed'] },
    addressTN: { type: String },
    phone_TN: { type: String },
    job_OM: { type: String },
    job_TN: { type: String },
    educational_level: { type: String },
    certificate: { type: String },
    scout_training_level: { type: String },
    date_last_training_level_study: { type: Date },
});

const Commander = User.discriminator('Commander', commanderSchema);

module.exports = Commander;