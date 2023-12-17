const mongoose = require('mongoose');

const regimentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  scouts: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date_entry: { type: Date, default: Date.now },
  }],
});

const Regiment = mongoose.model('Regiment', regimentSchema);

module.exports = Regiment;
