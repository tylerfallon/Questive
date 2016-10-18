// var Users = require('../models/Questor.js');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/final');

var Questors =