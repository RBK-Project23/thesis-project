const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const scoutProgramSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  address: { type: String, required: true },
  location: {
    type: {
      lat: Number,
      lon: Number,
    },
    required: false,
  },
  participants: [{ type: String, ref: "User" }],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ScoutProgram = mongoose.model("ScoutProgram", scoutProgramSchema);

module.exports = ScoutProgram;
