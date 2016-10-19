const mongoose = require('mongoose'), 
  Schema = mongoose.Schema;


const QuestorsSchema = new Schema({
  username: {
    type: String,
    required: true
   },
  points: {
    type: Number,
    required: true
  },
  totalMiles: {
    type: Number,
    required: true
  },

});


module.exports = mongoose.model('Questors', QuestorsSchema);
