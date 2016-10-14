// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')

var bgColors = { "Default": "#e3f2fd",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

var Main = React.createClass({

	render: function(){

		return(
			/*We can only render a single div. So we need to group everything inside of this main-container one*/
		<div className="row">
				<div className="container">
					{/*Navbar*/}
					<nav className="navbar navbar-dark bg-info">
						<div className="container-fluid">

							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<img src={'https://s10.postimg.org/dfh868909/Questive_Logo.png'} height='50' width='150' className="logoArea"/>
							</div>













					
							<div className="collapse navbar-collapse navbar-ex1-collapse">
											
									


									<ul className="nav navbar-nav navbar-right">
									<li><img src={'http://blog.roblox.com/wp-content/uploads/2014/04/Points-Icon-700px.png'} height='48' width='48'/></li>
									<li><a href="/Create">Create</a></li>
									</ul>

	<ul className="nav navbar-nav navbar-right">
									<li><img src={'http://www.engage2excel.com/wp-content/uploads/2015/09/Contests-icon.png'} height='48' width='48'/></li>
									<li><a href="/join">Join</a></li>
									</ul>

							<ul className="nav navbar-nav navbar-right">
									<li><img src={'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png'} height='48' width='48'/></li>
									<li><a href="/Leaderboards">Leaderboards</a></li>
								</ul>

			<ul className="nav navbar-nav navbar-right navbar-for-responsiveness">
									<li><img src={'https://openclipart.org/download/247319/abstract-user-flat-3.svg'} height='48' width='48'/></li>
									<li><a href="/profile">Profile</a></li>
									</ul>

									<ul className="nav navbar-nav navbar-right">
										<li><img src={'https://s-media-cache-ak0.pinimg.com/originals/e2/5c/43/e25c43c6a65bdca84c72f0c58524fcd6.png'} height='48' width='48'/></li>
										<li><a href="#/index">Home</a></li>
									</ul>
							</div>
						</div>
					</nav>

					{this.props.children}

		
				</div>
		</div>
		)
	}
});

// Export the module back to the route
export default Main;