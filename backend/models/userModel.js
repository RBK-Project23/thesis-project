const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passportLocalMongoose = require("passport-local-mongoose");



const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // address: { type: String, required: true },
 
});
userSchema.plugin(passportLocalMongoose);


const User = mongoose.model('User', userSchema);

module.exports = User;
