// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var Search = require('../components/Search'); 
var Saved = require('../components/Saved'); 
var Home = require('../components/Home')
var Profile = require('../components/Profile')
var Leaderboards = require('../components/Leaderboards')
var Join = require('../components/Join')
var Create = require('../components/Create')
var Index = require('../components/Index')


// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Search or Saved show the appropriate component*/}
		<Route path='Search' component={Search} />
		<Route path='Saved' component={Saved} />
		<Route path='Leaderboards' component={Leaderboards} />
		<Route path='Profile' component={Profile} />
		<Route path='Home' component={Home} />
		<Route path='Join' component={Join} />
		<Route path='Create' component={Create} />
		<Route path='Index' component={Index} />

		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={Index} />

		

	</Route>


);