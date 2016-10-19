 var Questors = require('../models/Questors.js');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/final');

var questors =[
	new Questors({
		username:"Frank Capraro",
		points:216,
		totalMiles:21.6
	}),
	new Questors({
		username: "Steven Galante" ,
		points:340,
		totalMiles:34
	}),

	new Questors({
		username:"Joshua Cassell",
		points: 201,
		totalMiles: 20.1
	}),

	new Questors({
		username: "Todd Germaine", 
		points: 410, 
		totalMiles: 41.2, 

	}), 

	new Questors({
		username: "Tyler Fallon", 
		points: 560, 
		totalMiles: 56.3
	})

];

var done = 0;
for (var i=0; i < questors.length; i++) {
	questors[i].save(function(err, result) {
		console.log('err', err);
		console.log('result', result);
		done++;
		if (done === questors.length) {
			  exit();
		}
	});
}

function exit() {
  mongoose.disconnect();
}



