var React = require('react');
var Router = require('react-router');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
	render: function(){
		return(
			<div className="main-container"> 
					<div>Profile Goes Here</div>
			</div>
		)
	}
});
module.exports = Profile;