const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  users: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date_entry: { type: Date, default: Date.now },
  }],
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
