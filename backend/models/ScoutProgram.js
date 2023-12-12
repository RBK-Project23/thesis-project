const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const scoutProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  address: { type: String, required: true },

  participants: [{ type: String, ref: 'User' }], // Change the type to String
});

const ScoutProgram = mongoose.model('ScoutProgram', scoutProgramSchema);

module.exports = ScoutProgram;
