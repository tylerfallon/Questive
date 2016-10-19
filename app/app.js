// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Grab the proeprty associated with the Router
import { Router, hashHistory }from 'react-router'

// Grabs the Routes
import routes from './config/routes';

// Renders the contents according to the route page. 
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(

	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
)