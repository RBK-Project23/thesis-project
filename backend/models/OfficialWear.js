const mongoose = require('mongoose');

const officialWearSchema = new mongoose.Schema({
  PullMeasuring: { type: String, required: true },
  ClothingMeasuring: { type: String, required: true },
  Price: { type: Number, required: true },
  DatePurchase: { type: Date, default: Date.now },
  scouts: [{
    scout: { type: mongoose.Schema.Types.ObjectId, ref: 'Scout', required: true },
    date_entry: { type: Date, default: Date.now },
  }],
  commanders: [{
    commander: { type: mongoose.Schema.Types.ObjectId, ref: 'Commander', required: true },
    date_entry: { type: Date, default: Date.now },
  }],
});

const OfficialWear = mongoose.model('OfficialWear', officialWearSchema);

module.exports = OfficialWear;
