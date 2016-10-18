
var React = require('react');
var Router = require('react-router');
var Main = require('../components/Main.js');
var Home = require('../components/home.js')
var Profile = require('../components/profile.js')
var Leaderboards = require('../components/leaderboards.js')
var Join = require('../components/join.js')
var Create = require('../components/create.js')
var Route = Router.Route;
var IndexRoute	= Router.IndexRoute;


module.exports = (

	<Route path='/' component={Main}>
		<Route path='Leaderboards' component={Leaderboards} />
		<Route path='Profile' component={Profile} />
		<Route path='Home' component={Home} />
		<Route path='Join' component={Join} />
		<Route path='Create' component={Create} />
		<IndexRoute component={Home} />
	</Route>
);