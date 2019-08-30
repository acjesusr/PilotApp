const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    name: { type: String, required: true },
    professor: { type: {
      name: { type: String, required: true },
      email: { type: String, required: true }
    }, required: true },
    description:   String,
    attendance: [{
      name: { type: String, required: true },
      email: { type: String, required: true }
    }],
    date: { type: Date, default: Date.now }
  });
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;