// Require React 
var React = require('react');

var Search = React.createClass({

	getInitialState:function(){
		return{value:''}
	},

	render: function(){

		return(
			<div className="container">
				
				<div className="col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Search For Articles </h3>
						</div>
						<div className="panel-body">
		
							<form >
								<div className="form-group">
								    <label for="search">Search Term:</label>
								    <input type="text" className="form-control" value={this.state.value}/>
								  </div>
							
								 {/*  Here we capture the Start Year Parameter  */}

								  <div className="form-group">
								    <label for="startYear">Start Year (Optional):</label>
								    <input type="text" class="form-control"/>
								  </div>

							  	  {/*}Here we capture the End Year Parameter */}
								  <div className="form-group">
								    <label for="endYear">End Year (Optional):</label>
								    <input type="text" class="form-control" />
								  </div>

								  {/*}Here we have our final submit button */}
								  <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>	  
					</form>
							{/*This code will allow us to automatically dump the correct GrandChild component
							{this.props.children}*/}
						</div>

					</div>
				</div>

			</div>
		)
	}
});

module.exports = Search;
