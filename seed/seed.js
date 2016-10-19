// var Users = require('../models/Questor.js');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/final');

var questors =[
	new Questors({
		username:"Frank Capraro",
		points:216,
		totalMiles:21.6
	}),
	new Questors({
		username:,
		points:,
		totalMiles:
	})

];

var done = 0;
for (var i=0; i < questors.length; i++) {
	questors[i].save(function(err, result) {
		done++;
		if (done === questors.length) {
			  exit();
		}
	});
}

function exit() {
  mongoose.disconnect();
}



