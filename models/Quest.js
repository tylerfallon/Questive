//require mongoose 
var mongoose = require('mongoose');
// create a schema class
var Schema = mongoose.Schema;

// create the article schema
var QuestSchema = new Schema({
  // just a string
  name: {
    type:String
  },
  // just a string
  photo: {
    type:String
  },
  startDate:{
    type:String
  }.
   endDate:{
    type:Date
  }

});

// Remember, Mongoose will automatically save the ObjectIds of the notes.
// These ids are referred to in the Article model.
// i have to require the User Id that has signed up for this contest 
// create the Note model with the NoteSchema
var Quest = mongoose.model('Article', ArticleSchema);

// export the Note model
module.exports = Quest;