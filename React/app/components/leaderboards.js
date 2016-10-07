var React = require('react');
var Router = require('react-router');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var helpers = require('../utils/helpers');


var Leaderboards = React.createClass({

	render: function(){
		return(
			<div className="main-container"> 
				<div>Leaderboards goes here</div>
			</div>
		)
	}
});

module.exports = Leaderboards;