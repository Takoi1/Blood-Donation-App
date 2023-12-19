// const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   name:String,
//   datedebut: Date,
//   datefin: Date,
//   lieu: String,
//   parrainer: String,
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   }
// });

// const Event = mongoose.model('Event', eventSchema);

// module.exports = Event;



const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  datedebut: Date,
  datefin: Date,
  lieu: String,
  parrainer: String,
  // Add a reference to the User model
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;