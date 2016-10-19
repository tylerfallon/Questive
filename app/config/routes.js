
var React = require('react');
var Router = require('react-router');
var Main = require('../components/Main.js');
var Home = require('../components/home.js')
var Profile = require('../components/profile.js')
var Leaderboards = require('../components/leaderboards.js')
var Join = require('../components/join.js')
var Create = require('../components/create.js')
var Register = require('../components/register.js')
var Route = Router.Route;
var IndexRoute	= Router.IndexRoute;
var hashHistory = require('react-router').hashHistory


module.exports = (

  <Router history={hashHistory}>
	   <Route path='/' component={Home} />
    		<Route path='Leaderboards' component={Leaderboards} />
    		<Route path='Profile' component={Profile} />
    		<Route path='Join' component={Join} />
    		<Route path='Create' component={Create} />
    		<Route path='Register' component={Register} />
    		<IndexRoute component={Home} />
	</Router>
);