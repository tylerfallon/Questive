//require mongoose 
var mongoose = require('mongoose');
// create a schema class
var Schema = mongoose.Schema;

// create the article schema
var TastSchema = new Schema({
  // just a string
  task: {
    type:String
  },
  // just a string
  location: {
    type:String
  },
  difficuly:{
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