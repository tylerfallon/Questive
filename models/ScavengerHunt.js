var mongoose = require('mongoose');
// create a schema class
var Schema = mongoose.Schema;

var ScavengerHuntSchema = new Schema({
	userId: {
  	type: Schema.Types.ObjectId, 
  	ref: 'user'
  },
	title: {
		type: String
	},
	description:{
		type:String
	},
	createdAt: {
		type: Date,
		default: Date.now
	}

})

var ScavengerHunt = mongoose.model( "ScavengerHunt", ScavengerHuntSchema );

module.exports = ScavengerHunt;