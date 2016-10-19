// Include React and React-Router dependencies
var React = require('react');
import { PageHeader } from 'react-bootstrap';

// Query Component Declaration
var Join = React.createClass({ 

	// Here we set initial variables for the component to be blanks
	getInitialState: function(){
		return {
			search: ""
		}
	},

	// Whenever we detect ANY change in the textbox, we register it. 
    handleChange: function(event) {
    	console.log("TEXT CHANGED");

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
    },

	/*This code handles the sending of the search terms to the parent Search component*/
	handleSubmit: function(){
		console.log("CLICKED");
		this.props.updateSearch(this.state.search);
		return false;
	},

	// Here we render the Query component
	render: function(){

		return(
			<div className="container">
			<div className ="main-container">

					<div className="row">
						<div className="col-lg-12">

							<div className="navbar navbar-light bg-default">
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Search for a Contest</strong></h1>
								</div>
								<div className="panel-body">

									{/*Note how we associate the text-box inputs with the state values*/}
									<form>
										<div className="form-group">
											<h4 className=""><strong>Topic</strong></h4>
											<input type="text" value={this.state.value} className="form-control " id="search" onChange= {this.handleChange} required/>

								
										</div>

										
										<div className="pull-left">
											<button type="button" className="btn btn-danger" onClick={this.handleSubmit}><h4>Submit</h4></button>
										</div>
									</form>

								</div>
							</div>

						</div>
					</div>
<center><PageHeader>OR</PageHeader></center>
					<div className="row">
						<div className="col-lg-12">

							<div className="navbar navbar-light bg-default">
								<div className="panel-heading">
									<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  See All Current Contests</strong></h1>
								</div>
								<div className="panel-body">

									{/*Note how we associate the text-box inputs with the state values*/}
									<form>
										<div className="form-group">
	
										</div>

										
										<div className="pull-left">
											<button type="button" className="btn btn-danger" onClick={this.handleSubmit}><h4>Populate List</h4></button>
										</div>
									</form>

								</div>
							</div>

						</div>
					</div>

			</div>
		</div>






		)
	}


});

// Export the module back to the route
module.exports = Join;