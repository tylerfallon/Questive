
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


module.exports = (

	<Route path='/' component={Main}>
		<Route path='leaderboards' component={Leaderboards} />
		<Route path='profile' component={Profile} />
		<Route path='home' component={Home} />
		<Route path='join' component={Join} />
		<Route path='create' component={Create} />
		<Route path='register' component={Register} />
		<IndexRoute component={Home} />
	</Route>
);