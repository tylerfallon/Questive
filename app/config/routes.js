// Inclue the React library
var React = require('react');

// Include the Router
var router = require('react-router');
var Route = router.Route;
var Router = router.Router;
//  Include the IndexRoute (catch-all route)
var IndexRoute	= router.IndexRoute;
//Include hashHistory
var hashHistory	= router.hashHistory;

// Reference the high-level components
var Main = require('../components/Main');
var Search = require('../components/Children/Search');
var Saved = require('../components/Children/Saved');
var Results = require('../components/Children/Grandchildren/Results');

//Instructions
//Create and export a route component with all of our routing logic
//By default our Child1 Route is rendered if no child route is selected
//By default our GrandChild1 Route is rendered if no grandchild is selected
//Note: grandchildren only render if child1 renders

// Export the Routes
module.exports = (
	<Router history={hashHistory}>
		<Route path='/' component = {Main}>

			<Route path="Search" component={Search}>
				<Route path="Results" component={Results}/>
			</Route>
			
			<Route path ='Saved' component={Saved}/>
			<IndexRoute component={Search}/>
		</Route>

	</Router>
);
