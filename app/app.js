// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the proeprty associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('./config/routes');
var hashHistory = require('react-router').hashHistory

// Renders the contents according to the route page. 
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(

	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
)