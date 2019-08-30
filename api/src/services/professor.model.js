const mongoose = require('mongoose');
//const eventSchema = require('event.model')
const Schema = mongoose.Schema;
const professorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
  });
const Professor = mongoose.model('Professor', professorSchema);
module.exports = Professor;