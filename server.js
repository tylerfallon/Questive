// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Promise = require('bluebird');
// require Schemas
// users schema
var Users = require('./models/users.js');
//require tasks schema
var Tasks = require('./models/Tasks.js');
//require scavenger hunt schema
var ScavengerHunt = require('./models/ScavengerHunt.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// // Run Morgan for Logging
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static(process.cwd() + "/public"));

// -------------------------------------------------

// MongoDB Configuration configuration

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/final');
var db = mongoose.connection;

db.on('error', function (err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function () {
	console.log('Mongoose connection successful.');
});
// use morgan and bodyparser with our app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// bring in our db files 
var ScavengerHunt = require('./models/ScavengerHunt.js');
var Tasks = require('./models/Tasks.js');

// -------------------------------------------------

// Main Route


app.post('/api/tasks',function(req, res){

	 var newTasks = new Tasks(req.body);

	 newTasks.save(function(err, doc){
			if(err){
				console.log(err);
			} else {
				console.log("Doc successful");
				console.log(doc);
				res.send(doc._id);
			}
	});
});

app.get('/api/grab', function(req, res){
	console.log("made it to api grab route");
	Tasks.find({})
		.exec(function(err,doc){
			if(err){
				console.log(err);
			}else{
				res.json(doc);
			}
		})
});



	// var promises = [];
	// // var newTasks = new Tasks(req.body);
	// console.log('Made it to saved post');
	// console.log(req.body[0]);
	// // update information to Mongoose 
	// var newTasks;
	// var promises = req.body.map(function(task, i) {
	// 	newTasks = new Tasks(req.body[i]);
	// 		return newTasks.save().catch(function(err) {
	// 			return err;
	// 		})
		
	// });

	// Promise.all(promises).then(function() {
	// 	res.status(200).end();
	// }).catch(function(err) {
	// 	res.status(500).end();
	// })
	// for(var i = 0; i < req.body.length; i ++){
		
		// return newTasks.save();
	// res.send(false);
	
//New Game Route

app.post('/create/saved',function(req, res){
	// var newTasks = new Tasks(req.body);
	console.log(req.body);
});

//Sign Up Route
app.post('/signup',function(req, res){
  // var newTasks = new Tasks(req.body);
  console.log(req.body);
});


//Leaderboard Route
app.get("/leaderboard", function(req, res) {
  User.find({}).sort(-'score'), function (err, users) { 
    res.send(users);
  }
});

//Tasks Route - Update Task DB*
app.post('/tasks',function(req, res){
  // var newTasks = new Tasks(req.body);
  console.log(req.body);
});

//Join Routes
app.get("/join", function(req, res) {
  console.log(Users);
});

app.post('/join/:id',function(req, res){
  Users.findOne({'_id': req.params.id})
  .populate('users')
  .exec(function(err, data){
    if (err){
      console.log(err);
    } else {
      res.json(data);
    }
  });
  console.log(req.body);
});
  

app.get("*", function(req, res) {
	console.log(0);
  res.sendFile(__dirname + "/public/index.html");
});

// // Route to get all saved articles
// app.get('/api/saved', function(req, res) {

// 	Article.find({})
// 		.exec(function(err, doc){

// 			if(err){
// 				console.log(err);
// 			}
// 			else {
// 				res.send(doc);
// 			}
// 		})
// });

// // Route to add an article to saved list
// app.post('/api/saved', function(req, res){
// 	var newArticle = new Article(req.body);

// 	console.log(req.body)

// 	var title = req.body.title;
// 	var date = req.body.date;
// 	var url = req.body.url;

// 	newArticle.save(function(err, doc){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			res.send(doc._id);
// 		}
// 	});
// });

// // Route to delete an article from saved list
// app.delete('/api/saved/', function(req, res){

// 	var url = req.param('url');

// 	Article.find({"url": url}).remove().exec(function(err, data){
// 		if(err){
// 			console.log(err);
// 		}
// 		else {
// 			res.send("Deleted");
// 		}
// 	});
// });


// -------------------------------------------------

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
