// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

var Main = React.createClass({

	render: function(){

		return(
			/*We can only render a single div. So we need to group everything inside of this main-container one*/
		<div className="row">
				<div className="container">
					<nav className="bg-warning navbar-dark theNavBar">
						<div className="container-fluid">
							<div className="navbar-header">
								<a href='/'><img src={'https://s10.postimg.org/dfh868909/Questive_Logo.png'} height='50' width='150' className="logoArea"/></a>
							</div>
					
							<div className="collapse navbar-collapse navbar-ex1-collapse">
											
									<ul className="nav navbar-nav navbar-right">
									<li><img src={'http://blog.roblox.com/wp-content/uploads/2014/04/Points-Icon-700px.png'} height='48' width='48'/></li>
									<li><a href="/Create" class='navWords'>Create</a></li>
									</ul>

	<ul className="nav navbar-nav navbar-right">
									<li><img src={'http://www.engage2excel.com/wp-content/uploads/2015/09/Contests-icon.png'} height='48' width='48'/></li>
									<li><a href="/join" class='navWords'>Join</a></li>
									</ul>

							<ul className="nav navbar-nav navbar-right">
									<li><img src={'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png'} height='48' width='48'/></li>
									<li><a href="/Leaderboards" class='navWords'>Leaderboards</a></li>
								</ul>

			<ul className="nav navbar-nav navbar-right navbar-for-responsiveness">
									<li><img src={'https://openclipart.org/download/247319/abstract-user-flat-3.svg'} height='48' width='48'/></li>
									<li><a href="/profile" class='navWords'>Profile</a></li>
									</ul>
							</div>
						</div>
					</nav>
	<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <img src={'https://s10.postimg.org/dfh868909/Questive_Logo.png'} height='200' width='100'/>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/Profile"><img src={'https://openclipart.org/download/247319/abstract-user-flat-3.svg'} height='48' width='48'/>  Profile</NavItem>
      <NavItem eventKey={2} href="/Leaderboards"><img src={'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png'} height='48' width='48'/>  Leaderboards</NavItem>
      <NavItem eventKey={3} href="/join"><img src={'http://www.engage2excel.com/wp-content/uploads/2015/09/Contests-icon.png'} height='48' width='48'/>  Join</NavItem>
      <NavItem eventKey={4} href="/create"><img src={'http://blog.roblox.com/wp-content/uploads/2014/04/Points-Icon-700px.png'} height='48' width='48'/>  Create</NavItem>
    </Nav>
  </Navbar>

					{this.props.children}
				</div>
		</div>
		)
	}
});

// Export the module back to the route
export default Main;