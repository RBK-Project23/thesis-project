const mongoose = require('mongoose');
const User = require('./User');

const parentSchema = new mongoose.Schema({
    phone2: { type: String },
    addressTN: { type: String },
    ParticipatedTunisianScoutRegiment: { type: String },
    CIN: { type: String },
});

const Parent = User.discriminator('Parent', parentSchema);

module.exports = Parent;
