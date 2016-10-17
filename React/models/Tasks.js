var mongoose = require('mongoose');
// create a schema class
var Schema = mongoose.Schema;

var TasksSchema = new Schema({
  // user: {type: Schema.Types.ObjectId, ref: 'User'},

	title: {
		type:String,
		required: true
	},
	createAt : {
		type: Date,
		default: Date.now
	},
	task:{
		type:String,
		required:true
	},
	location:{
		type:String,
		required:true
	},
	additionalInfo:{
		type:String,
		required:true
	}
	// scavengerhuntID:{
	// 	type: Schema.type.ObjectId,
	// 	ref: "ScavengerHunt"
	// }

});

var Tasks = mongoose.model( "Tasks", TasksSchema );

module.exports = Tasks;