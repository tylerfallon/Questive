var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

// add dbs 