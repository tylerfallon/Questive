var React = require('react');
var Router = require('react-router');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var helpers = require('../utils/helpers');
var ReactDOM = require('react-dom');
import { Button } from 'react-bootstrap';

var Create = React.createClass({
	render: function(){
		return(
			<div className="main-container"> 

			<div id='buttonMount'></div>
				<div className="well">
    		<Button bsSize="large" block>Submit Contest</Button>
  			</div>

			</div>
		);
}


});



module.exports = Create;