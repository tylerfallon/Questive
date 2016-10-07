// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')

// Create the Main component
var Home = React.createClass({

	render: function(){

		return(
			/*We can only render a single div. So we need to group everything inside of this main-container one*/
			<div className="main-container">


				<div className="container">
					{/*Navbar*/}
					<nav className="navbar navbar-default" role="navigation">
						<div className="container-fluid">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
					
							<div className="collapse navbar-collapse navbar-ex1-collapse">

								<ul className="nav navbar-nav navbar-left">

									<li><img src={'https://openclipart.org/download/247319/abstract-user-flat-3.svg'} height='50' width='50'/></li>
									<li><a href="#/search">Profile</a></li>
									</ul>

										<ul className="nav navbar-nav navbar-right">
								<li><img src={'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png'} height='50' width='50'/></li>
									<li><a href="#/saved">Leaderboards</a></li>
									<li><a href="#/home">Home</a></li>
									</ul>
									
							</div>
						</div>

					</nav>





					{/*Jumbotron*/}
					<div className="jumbotron">
						<h2 className="text-center"><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
						<h3 className="text-center">Search for and save articles of interest.</h3>
					</div>


					{/*Here we will load the sub components (Search or Saved */}
					{/*These sub-components are getting passed as this.props.children*/}
					{this.props.children}

				</div>



			</div>
		)
	}
});

// Export the module back to the route
module.exports = Home;