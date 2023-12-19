const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  date: String,
  telephone: String,
  email: String,
  password: String,
  codepostal: String,
  nomadresse:String,
  emailcenter:String,
  phonecenter:String,

  typedesang: String,
  pdfPath: String,
  role:{
    type:String,
    default:"donor"
  },
  isAdminAccepted:{
    type:Boolean,
    default:false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

