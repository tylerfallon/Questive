const mongoose = require('mongoose'), 
  Schema = mongoose.Schema;

const QuestorSchema = new Schema({//schema structure will go here.
}); module.exports = mongoose.model('Questors', QuestorSchema);

const QuestorsSchema = new Schema({
  username: {
    type: String,
    required: true
   },
  points: {
    type: Number
    required: true
  },
  TotalMiles: {
    type: Number
    required: true
  },

});