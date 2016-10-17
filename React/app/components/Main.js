// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');

var Main = React.createClass({
	render: function(){
		return(
		<div className="row">
				<div className="container">
					<nav className="bg-info navbar-dark theNavBar">
						<div className="container-fluid">
							<div className="navbar-header">
								<a href='#/'><img src={'https://s10.postimg.org/dfh868909/Questive_Logo.png'} height='50' width='150' className="logoArea"/></a>
							</div>
					
							<div className="collapse navbar-collapse navbar-ex1-collapse">
											
									<span className="nav navbar-nav navbar-right">
									<span className='navWords'><a href="#/Create" className='navWords'><img src={'http://blog.roblox.com/wp-content/uploads/2014/04/Points-Icon-700px.png'} height='48' width='48'/> Create</a></span>
									</span>

									<span className="nav navbar-nav navbar-right">
									<span className='navWords'><a href="#/join" className='navWords'><img src={'http://www.engage2excel.com/wp-content/uploads/2015/09/Contests-icon.png'} height='48' width='48'/> Join</a></span>
									</span>

									<span className="nav navbar-nav navbar-right">
									<span className='navWords'><a href="#/Leaderboards" className='navWords'><img src={'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png'} height='48' width='48'/> Leaderboards</a></span>
								</span>

									<span className="nav navbar-nav navbar-right navbar-for-responsiveness">
									<span className='navWords'><a href="#/profile" className='navWords'><img src={'https://openclipart.org/download/247319/abstract-user-flat-3.svg'} height='48' width='48'/> Profile</a></span>
									</span>
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
module.exports = Main;