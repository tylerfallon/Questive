// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var bCrypt = require('bcrypt-nodejs');
// require Schemas
// users schema

var User = require('./models/users.js');

var Users = require('./models/users.js');

var Questors = require('./models/Questors.js');

//require tasks schema
var Tasks = require('./models/Tasks.js');
//require scavenger hunt schema
var ScavengerHunt = require('./models/ScavengerHunt.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;

var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKeySuperSafeKey'}));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


// passport/login.js
passport.use('local-login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) { 
    // check in mongo if a user with username exists or not
    User.findOne({ 'username' :  username }, 
      function(err, user) {
        // In case of any error, return using the done method
        if (err)
          return done(err);
        // Username does not exist, log error & redirect back
        if (!user){
          console.log('User Not Found with username '+username);
          return done(null, false);                 
        }
        // User exists but wrong password, log the error 
        if (!isValidPassword(user, password)){
          console.log('Invalid Password');
          return done(null, false);
        }
        // User and password both match, return user from 
        // done method which will be treated like success
        return done(null, user);
      }
    );
}));


var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
}


	passport.use('local-signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {

            findOrCreateUser = function(){
                // find a user in Mongo with provided username
                User.findOne({ 'username' :  username }, function(err, user) {
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }
                    // already exists
                    if (user) {
                        console.log('User already exists with username: '+username);
                        return done(null, false);
                    } else {
                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser.username = username;
                        newUser.password = createHash(password);
                        newUser.email = req.param('email');

                        // save the user
                        newUser.save(function(err) {
                            if (err){
                                console.log('Error in Saving user: '+err);  
                                throw err;  
                            }
                            console.log('User Registration succesful');    
                            return done(null, newUser);
                        });
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
        })
    );

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }


	passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) { 
            // check in mongo if a user with username exists or not
            User.findOne({ 'username' :  username }, 
                function(err, user) {
                    // In case of any error, return using the done method
                    if (err)
                        return done(err);
                    // Username does not exist, log the error and redirect back
                    if (!user){
                        console.log('User Not Found with username '+username);
                        return done(null, false);                 
                    }
                    // User exists but wrong password, log the error 
                    if (!isValidPassword(user, password)){
                        console.log('Invalid Password');
                        return done(null, false); // redirect back to login page
                    }
                    // User and password both match, return user from done method
                    // which will be treated like success
                    return done(null, user);
                }
            );

        })
    );


    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }

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



//Leaderboard Route
app.get("/leaderboard", function(req, res) {
  console.log("in leaderboard");
  Questors.find({}).sort('-points').exec(function (err, questors) { 
    res.send(questors);
  });
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
  

 app.post('/login', passport.authenticate('local-login'), function(req, res) {
    console.log('user', req.user);
    res.send(200, req.user);
  });


console.log('__dirname', __dirname);
var viewOptions = {
    root: __dirname + '/../static/views'
}

  
  app.post('/register', function(req, res, next) {
    console.log('body', req.body);
    next(null);
  }, passport.authenticate('local-signup'), function(req, res) {
    res.send(200, req.user);
  });
  
  app.get('/logout', function(req, res) {
    req.logout();
    res.status(200).end();
  });

  app.get('/user', function(req, res) {
    res.send(req.user);
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
