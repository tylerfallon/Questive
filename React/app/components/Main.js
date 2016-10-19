var React = require('react');
var Router = require('react-router');

var Main = React.createClass({
	render: function(){
		return(
<div className="row">
      <nav className="bg-info navbar-dark theNavBar">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/#"><img src={'https://s10.postimg.org/dfh868909/Questive_Logo.png'} height='50' width='150' className="logoArea"/></a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/#create"><img src={'http://blog.roblox.com/wp-content/uploads/2014/04/Points-Icon-700px.png'} height='48' width='48'/> </a></li>
              <li><a href="/#join"><img src={'http://www.engage2excel.com/wp-content/uploads/2015/09/Contests-icon.png'} height='48' width='48'/> </a></li>
              <li><a href="/#leaderboards"><img src={'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png'} height='48' width='48'/> </a></li>
              <li><a href="/#profile"><img src={'https://openclipart.org/download/247319/abstract-user-flat-3.svg'} height='48' width='48'/> </a></li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
					{this.props.children}
			
		</div>
		)
	}
});

module.exports = Main;