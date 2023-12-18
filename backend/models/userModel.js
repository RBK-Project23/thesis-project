const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passportLocalMongoose = require("passport-local-mongoose");



const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  active: { type: Boolean, default: true }
  
 
<<<<<<< HEAD:backend/models/userModel.js
=======
  addressOM: { type: String },
  type_user: { type: String, enum: ['admin', 'scout', 'commander', 'parent'], required: true },
  blood_type: { type: String },
  phoneOM: { type: String },
  photo: { type: String },

>>>>>>> ad1e12fbebb5c1549b2f252e90e6094af552b900:backend/models/User.js
});
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });


const User = mongoose.model('User', userSchema);

module.exports = User;
