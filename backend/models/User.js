const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passportLocalMongoose = require("passport-local-mongoose");



const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // address: { type: String, required: true },
 
  addressOM: { type: String },
  type_user: { type: String, enum: ['admin', 'scout', 'commander', 'parent'], required: true },
  blood_type: { type: String },
  phoneOM: { type: String },
  photo: { type: String },

});
userSchema.plugin(passportLocalMongoose);


const User = mongoose.model('User', userSchema);

module.exports = User;
