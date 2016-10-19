// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');
var ReactDOM = require('react-dom');
var Main = require('./Main');

import { PageHeader } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { FieldGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Radio } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { ListGroup} from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Pager } from 'react-bootstrap';

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
      <div className="mainDiv">
        <Main />
			<div className="container">
			<div className ="main-container">
				<div className ="container">
					<div className="row">
            <left><PageHeader>Join A Contest</PageHeader></left>
            <div></div>
          	<ControlLabel><h2><strong>Active Contests</strong></h2></ControlLabel>
          	<div id='placeholder'>
          		<Panel collapsible defaultExpanded={false} className="text-center"  header='Rutgers Wicked Homecoming Quest' >
               <ListGroup fill>
               	<ListGroupItem>
               		<h5><strong> Task 1:</strong> Take a picture of the first player to ever score a touchdown at Rutgers</h5>
               		<h5><strong>Location:</strong> Rutgers New Brunswick </h5>
               		<h5><strong>Additional Info:</strong> You can find this player at the place where this all started</h5>
               	</ListGroupItem>
             		<ListGroupItem>
               		<h5><strong> Task 2:</strong> Finish 3 Fatsandwiches at the original Grease Truck</h5>
               		<h5><strong> Location:</strong> Rutgers New Brunswick College Ave</h5>
               		<h5><strong> Additional Info:</strong> The FAT CAT & FAT DAD are my personal Favorites</h5>
               	</ListGroupItem>
               	<ListGroupItem>
               		<h5><strong> Task 3:</strong>Take the rutgers challenge  </h5>
               		<h5><strong> Location:</strong> Rutgers New Brunswick College Ave</h5>
               		<h5><strong> Additional Info:</strong> The FAT CAT & FAT DAD are my personal Favorites</h5>
               	</ListGroupItem>
               </ListGroup>
          		</Panel>
          	</div>{/*Close placeholder*/}
          	<div id='placeholder'>
          		<Panel collapsible defaultExpanded={false} className="text-center" header='A Wacky Halloween on Easton' > 
               <ListGroup fill>
               	<ListGroupItem>
               		<h5><strong> Task 1:</strong> Take a picture with a the random clown</h5>
               		<h5><strong> Location:</strong>Easton Ave.  </h5>
               		<h5><strong> Additional Info:</strong> Dont get to close to the clowns. Make sure to have your pepper spray</h5>
               	</ListGroupItem>
             		<ListGroupItem>
               		<h5><strong> Task 2:</strong> Challenge the Wizard King to a game of darts </h5>
               		<h5><strong> Location:</strong> Easton Ave</h5>
               		<h5><strong> Additional Info:</strong> Make sure to not anger the wizard or you could be tasked with completing an additional quest </h5>
               	</ListGroupItem>
               	<ListGroupItem>
               		<h5><strong> Task 3:</strong> Find the golden Snitch </h5>
               		<h5><strong> Location:</strong> Golden Rail bar</h5>
               		<h5><strong> Additional Info:</strong> First one to find the snitch wins the match</h5>
               	</ListGroupItem>
               </ListGroup>
          		</Panel>
          	</div>{/*Close placeholder*/}
          		<div id='placeholder'>
          		<Panel collapsible defaultExpanded={false} className="text-center" header='A New Students First Day!' > 
               <ListGroup fill>
               	<ListGroupItem>
							     <h5> Task 4: Eat in every on-campus cafeteria </h5>
							     <h5> Location: Rutgers-New Brunswick: every campus</h5>
							     <h5> Additional Info: Don't over eat!</h5>
							</ListGroupItem>
							<ListGroupItem>
							     <h5> Task 5: Check-in at every park in New Brunswick </h5>
							     <h5> Location:New Brunswick, NJ</h5>
							     <h5> Additional Info: A lot of the parks are along the Raritan. Take some great pics!</h5>
							</ListGroupItem>
							<ListGroupItem>
							     <h5> Task 6: Take a selfie from the top of Plaza Square Apartments </h5>
							     <h5> Location:1 Richmond Street, New Brunswick, NJ</h5>
							     <h5> Additional Info: The custodians rarely lock the roof access doors. Lots of interesting scenes from up there!</h5>
							</ListGroupItem>
               </ListGroup>
          		</Panel>
          	</div>{/*Close placeholder*/}
					</div> {/* Close Row */}
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
  </div>






		)
	}


});

// Export the module back to the route
module.exports = Join;

// Tylers origin code we would like to work in 

					// <div className="row">
					// 	<div className="col-lg-12">

					// 		<div className="navbar navbar-light bg-default">
					// 			<div className="panel-heading">
					// 				<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Search for a Contest</strong></h1>
					// 			</div>
					// 			<div className="panel-body">

					// 				{/*Note how we associate the text-box inputs with the state values*/}
					// 				<form>
					// 					<div className="form-group">
					// 						<h4 className=""><strong>Topic</strong></h4>
					// 						<input type="text" value={this.state.value} className="form-control " id="search" onChange= {this.handleChange} required/>

								
					// 					</div>

										
					// 					<div className="pull-left">
					// 						<button type="button" className="btn btn-danger" onClick={this.handleSubmit}><h4>Submit</h4></button>
					// 					</div>
					// 				</form>

					// 			</div>
					// 		</div>

					// 	</div>
					// </div>