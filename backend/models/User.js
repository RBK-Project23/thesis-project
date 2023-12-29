const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passportLocalMongoose = require("passport-local-mongoose");



const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  active: { type: Boolean, default: true },
  
 
  addressOM: { type: String },
  type_user: { type: String},
  status: {type: Boolean}
 

});
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });


const User = mongoose.model('User', userSchema);

module.exports = User;