var React = require('react');
var Router = require('react-router');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var helpers = require('../utils/helpers');
import { Button } from 'react-bootstrap';

var Profile = React.createClass({
	render: function(){
		return(
			<div className="main-container"> 
		    Profile goes here
			</div>
		)
	}
});
module.exports = Profile;