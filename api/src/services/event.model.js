const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    name: { type: String, required: true },
    professor: { type: String, required: true },
    description:   String,
    attendance: [{ email: String, name: String }],
    date: { type: Date, default: Date.now }
  });
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;