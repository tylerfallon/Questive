var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// client/template.main.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.body.addContent((function() {                                                                            // 2
  var view = this;                                                                                                // 3
  return HTML.Raw('<div id="app"></div>');                                                                        // 4
}));                                                                                                              // 5
Meteor.startup(Template.body.renderToDocument);                                                                   // 6
                                                                                                                  // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.jsx":["react","react-dom","../imports/startup/accounts-config.js","../imports/ui/Main.js","../imports/startup/client/routes",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// client/main.jsx                                                                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var React,Component;module.import("react",{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});module.import('../imports/startup/accounts-config.js');var Main;module.import('../imports/ui/Main.js',{"default":function(v){Main=v}});var routes;module.import('../imports/startup/client/routes',{"default":function(v){routes=v}});
                                                                                                                  //
                                                                                                                  // 3
                                                                                                                  //
//start startup files                                                                                             //
                                                                                                                  // 6
                                                                                                                  //
                                                                                                                  // 8
                                                                                                                  // 9
                                                                                                                  //
Meteor.startup(function () {                                                                                      // 12
	ReactDOM.render(routes, document.getElementById("app"));                                                         // 13
});                                                                                                               // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"startup":{"client":{"routes.jsx":["react","react-router","../../ui/create.js","../../ui/leaderboards.js","../../ui/Main.js","../../ui/profile.js","../../ui/join.js","../../ui/realHome.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/client/routes.jsx                                                                              //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var React;module.import('react',{"default":function(v){React=v}});var Router,Route,IndexRoute,browserHistory;module.import('react-router',{"Router":function(v){Router=v},"Route":function(v){Route=v},"IndexRoute":function(v){IndexRoute=v},"browserHistory":function(v){browserHistory=v}});var Create;module.import('../../ui/create.js',{"default":function(v){Create=v}});var Leaderboards;module.import('../../ui/leaderboards.js',{"default":function(v){Leaderboards=v}});var Main;module.import('../../ui/Main.js',{"default":function(v){Main=v}});var Profile;module.import('../../ui/profile.js',{"default":function(v){Profile=v}});var Join;module.import('../../ui/join.js',{"default":function(v){Join=v}});var realHome;module.import('../../ui/realHome.js',{"default":function(v){realHome=v}});
                                                                                                                  // 2
                                                                                                                  //
                                                                                                                  // 4
                                                                                                                  // 5
                                                                                                                  // 6
                                                                                                                  // 7
                                                                                                                  // 8
                                                                                                                  // 9
                                                                                                                  //
// import { One } from '../../ui/pages/one.jsx';                                                                  //
// import { Two } from '../../ui/pages/two.jsx';                                                                  //
                                                                                                                  //
// import { NotFound } from '../../ui/pages/not-found.jsx';                                                       //
                                                                                                                  //
var routes = React.createElement(                                                                                 // 17
  Router,                                                                                                         // 18
  { history: browserHistory },                                                                                    // 18
  React.createElement(                                                                                            // 19
    Route,                                                                                                        // 19
    { path: '/', component: Main },                                                                               // 19
    React.createElement(IndexRoute, { component: realHome }),                                                     // 20
    React.createElement(Route, { path: 'Leaderboards', component: Leaderboards }),                                // 21
    React.createElement(Route, { path: 'Create', component: Create }),                                            // 22
    React.createElement(Route, { path: 'Profile', component: Profile }),                                          // 23
    React.createElement(Route, { path: 'Join', component: Join })                                                 // 24
  )                                                                                                               // 19
);                                                                                                                // 18
                                                                                                                  //
module.export("default",exports.default=(routes));                                                                // 29
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"accounts-config.js":["meteor/accounts-base",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/startup/accounts-config.js                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                          // 1
                                                                                                                  //
Accounts.ui.config({                                                                                              // 3
  passwordSignupFields: 'USERNAME_ONLY'                                                                           // 4
});                                                                                                               // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"Search":{"Query.js":["react-bootstrap","react",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/Search/Query.js                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var PageHeader;module.import('react-bootstrap',{"PageHeader":function(v){PageHeader=v}});// Include React and React-Router dependencies
var React = require('react');                                                                                     // 2
                                                                                                                  // 3
                                                                                                                  //
// Query Component Declaration                                                                                    //
var Query = React.createClass({                                                                                   // 6
	displayName: 'Query',                                                                                            // 6
                                                                                                                  //
                                                                                                                  //
	// Here we set initial variables for the component to be blanks                                                  //
	getInitialState: function () {                                                                                   // 9
		function getInitialState() {                                                                                    // 9
			return {                                                                                                       // 10
				search: ""                                                                                                    // 11
			};                                                                                                             // 10
		}                                                                                                               // 13
                                                                                                                  //
		return getInitialState;                                                                                         // 9
	}(),                                                                                                             // 9
                                                                                                                  //
	// Whenever we detect ANY change in the textbox, we register it.                                                 //
	handleChange: function () {                                                                                      // 16
		function handleChange(event) {                                                                                  // 16
			console.log("TEXT CHANGED");                                                                                   // 17
                                                                                                                  //
			// Here we create syntax to capture any change in text to the query terms (pre-search).                        //
			// See this Stack Overflow answer for more details:                                                            //
			// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
			var newState = {};                                                                                             // 22
			newState[event.target.id] = event.target.value;                                                                // 23
			this.setState(newState);                                                                                       // 24
		}                                                                                                               // 25
                                                                                                                  //
		return handleChange;                                                                                            // 16
	}(),                                                                                                             // 16
                                                                                                                  //
	/*This code handles the sending of the search terms to the parent Search component*/                             //
	handleSubmit: function () {                                                                                      // 28
		function handleSubmit() {                                                                                       // 28
			console.log("CLICKED");                                                                                        // 29
			this.props.updateSearch(this.state.search);                                                                    // 30
			return false;                                                                                                  // 31
		}                                                                                                               // 32
                                                                                                                  //
		return handleSubmit;                                                                                            // 28
	}(),                                                                                                             // 28
                                                                                                                  //
	// Here we render the Query component                                                                            //
	render: function () {                                                                                            // 35
		function render() {                                                                                             // 35
                                                                                                                  //
			return React.createElement(                                                                                    // 37
				'div',                                                                                                        // 38
				{ className: 'main-container' },                                                                              // 38
				React.createElement(                                                                                          // 40
					'div',                                                                                                       // 40
					{ className: 'row' },                                                                                        // 40
					React.createElement(                                                                                         // 41
						'div',                                                                                                      // 41
						{ className: 'col-lg-12' },                                                                                 // 41
						React.createElement(                                                                                        // 43
							'div',                                                                                                     // 43
							{ className: 'navbar navbar-light bg-default' },                                                           // 43
							React.createElement(                                                                                       // 44
								'div',                                                                                                    // 44
								{ className: 'panel-heading' },                                                                           // 44
								React.createElement(                                                                                      // 45
									'h1',                                                                                                    // 45
									{ className: 'panel-title' },                                                                            // 45
									React.createElement(                                                                                     // 45
										'strong',                                                                                               // 45
										null,                                                                                                   // 45
										React.createElement('i', { className: 'fa fa-newspaper-o', 'aria-hidden': 'true' }),                    // 45
										'  Search for a Contest'                                                                                // 45
									)                                                                                                        // 45
								)                                                                                                         // 45
							),                                                                                                         // 44
							React.createElement(                                                                                       // 47
								'div',                                                                                                    // 47
								{ className: 'panel-body' },                                                                              // 47
								React.createElement(                                                                                      // 50
									'form',                                                                                                  // 50
									null,                                                                                                    // 50
									React.createElement(                                                                                     // 51
										'div',                                                                                                  // 51
										{ className: 'form-group' },                                                                            // 51
										React.createElement(                                                                                    // 52
											'h4',                                                                                                  // 52
											{ className: '' },                                                                                     // 52
											React.createElement(                                                                                   // 52
												'strong',                                                                                             // 52
												null,                                                                                                 // 52
												'Topic'                                                                                               // 52
											)                                                                                                      // 52
										),                                                                                                      // 52
										React.createElement('input', { type: 'text', value: this.state.value, className: 'form-control ', id: 'search', onChange: this.handleChange, required: true })
									),                                                                                                       // 51
									React.createElement(                                                                                     // 59
										'div',                                                                                                  // 59
										{ className: 'pull-left' },                                                                             // 59
										React.createElement(                                                                                    // 60
											'button',                                                                                              // 60
											{ type: 'button', className: 'btn btn-danger', onClick: this.handleSubmit },                           // 60
											React.createElement(                                                                                   // 60
												'h4',                                                                                                 // 60
												null,                                                                                                 // 60
												'Submit'                                                                                              // 60
											)                                                                                                      // 60
										)                                                                                                       // 60
									)                                                                                                        // 59
								)                                                                                                         // 50
							)                                                                                                          // 47
						)                                                                                                           // 43
					)                                                                                                            // 41
				),                                                                                                            // 40
				React.createElement(                                                                                          // 69
					'center',                                                                                                    // 69
					null,                                                                                                        // 69
					React.createElement(                                                                                         // 69
						PageHeader,                                                                                                 // 69
						null,                                                                                                       // 69
						'OR'                                                                                                        // 69
					)                                                                                                            // 69
				),                                                                                                            // 69
				React.createElement(                                                                                          // 70
					'div',                                                                                                       // 70
					{ className: 'row' },                                                                                        // 70
					React.createElement(                                                                                         // 71
						'div',                                                                                                      // 71
						{ className: 'col-lg-12' },                                                                                 // 71
						React.createElement(                                                                                        // 73
							'div',                                                                                                     // 73
							{ className: 'navbar navbar-light bg-default' },                                                           // 73
							React.createElement(                                                                                       // 74
								'div',                                                                                                    // 74
								{ className: 'panel-heading' },                                                                           // 74
								React.createElement(                                                                                      // 75
									'h1',                                                                                                    // 75
									{ className: 'panel-title' },                                                                            // 75
									React.createElement(                                                                                     // 75
										'strong',                                                                                               // 75
										null,                                                                                                   // 75
										React.createElement('i', { className: 'fa fa-newspaper-o', 'aria-hidden': 'true' }),                    // 75
										'  See All Current Contests'                                                                            // 75
									)                                                                                                        // 75
								)                                                                                                         // 75
							),                                                                                                         // 74
							React.createElement(                                                                                       // 77
								'div',                                                                                                    // 77
								{ className: 'panel-body' },                                                                              // 77
								React.createElement(                                                                                      // 80
									'form',                                                                                                  // 80
									null,                                                                                                    // 80
									React.createElement('div', { className: 'form-group' }),                                                 // 81
									React.createElement(                                                                                     // 86
										'div',                                                                                                  // 86
										{ className: 'pull-left' },                                                                             // 86
										React.createElement(                                                                                    // 87
											'button',                                                                                              // 87
											{ type: 'button', className: 'btn btn-danger', onClick: this.handleSubmit },                           // 87
											React.createElement(                                                                                   // 87
												'h4',                                                                                                 // 87
												null,                                                                                                 // 87
												'Populate List'                                                                                       // 87
											)                                                                                                      // 87
										)                                                                                                       // 87
									)                                                                                                        // 86
								)                                                                                                         // 80
							)                                                                                                          // 77
						)                                                                                                           // 73
					)                                                                                                            // 71
				)                                                                                                             // 70
			);                                                                                                             // 38
		}                                                                                                               // 108
                                                                                                                  //
		return render;                                                                                                  // 35
	}()                                                                                                              // 35
                                                                                                                  //
});                                                                                                               // 6
                                                                                                                  //
// Export the module back to the route                                                                            //
module.exports = Query;                                                                                           // 114
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Results.js":["react","react-router",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/Search/Results.js                                                                                   //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// Include React and React-Router dependencies                                                                    //
var React = require('react');                                                                                     // 2
var Router = require('react-router');                                                                             // 3
                                                                                                                  //
// Include the Helper (for the query)                                                                             //
                                                                                                                  //
// Query Component Declaration                                                                                    //
var Results = React.createClass({                                                                                 // 8
	displayName: 'Results',                                                                                          // 8
                                                                                                                  //
                                                                                                                  //
	// Here we will save states for the contents we save                                                             //
	getInitialState: function () {                                                                                   // 11
		function getInitialState() {                                                                                    // 11
			return {                                                                                                       // 12
				title: "",                                                                                                    // 13
				url: "",                                                                                                      // 14
				pubdate: ""                                                                                                   // 15
			};                                                                                                             // 12
		}                                                                                                               // 17
                                                                                                                  //
		return getInitialState;                                                                                         // 11
	}(),                                                                                                             // 11
                                                                                                                  //
	// /*This code handles the sending of the search terms to the parent Search component*/                          //
	handleClick: function () {                                                                                       // 20
		function handleClick(item, event) {                                                                             // 20
			console.log("CLICKED");                                                                                        // 21
			console.log(item);                                                                                             // 22
                                                                                                                  //
			helpers.postSaved(item.headline.main, item.pub_date, item.web_url).then(function (data) {                      // 24
				console.log(item.web_url);                                                                                    // 26
			}.bind(this));                                                                                                 // 27
		}                                                                                                               // 29
                                                                                                                  //
		return handleClick;                                                                                             // 20
	}(),                                                                                                             // 20
                                                                                                                  //
	// Here we render the function                                                                                   //
	render: function () {                                                                                            // 33
		function render() {                                                                                             // 33
			if (                                                                                                           // 37
                                                                                                                  //
			// We check if the target has a "docs" value (to confirm that we aren't just running the initial data)         //
			!this.props.results.hasOwnProperty('docs')) {                                                                  // 37
                                                                                                                  //
				return React.createElement('div', null);                                                                      // 39
			}                                                                                                              // 45
                                                                                                                  //
			// If data is provided                                                                                         //
			else {                                                                                                         // 37
				var                                                                                                           // 51
                                                                                                                  //
				// We loop through the results and create divs for each.                                                      //
				articles = this.props.results.docs.map(function (article, index) {                                            // 51
					return React.createElement(                                                                                  // 54
						'div',                                                                                                      // 56
						{ key: index },                                                                                             // 56
						React.createElement(                                                                                        // 58
							'li',                                                                                                      // 58
							{ className: 'list-group-item' },                                                                          // 58
							React.createElement(                                                                                       // 60
								'h3',                                                                                                     // 60
								null,                                                                                                     // 60
								React.createElement(                                                                                      // 61
									'span',                                                                                                  // 61
									null,                                                                                                    // 61
									React.createElement(                                                                                     // 61
										'em',                                                                                                   // 61
										null,                                                                                                   // 61
										article.headline.main                                                                                   // 61
									)                                                                                                        // 61
								),                                                                                                        // 61
								React.createElement(                                                                                      // 62
									'span',                                                                                                  // 62
									{ className: 'btn-group pull-right' },                                                                   // 62
									React.createElement(                                                                                     // 63
										'a',                                                                                                    // 63
										{ href: article.web_url, target: '_blank' },                                                            // 63
										React.createElement(                                                                                    // 63
											'button',                                                                                              // 63
											{ className: 'btn btn-default ' },                                                                     // 63
											'View Article'                                                                                         // 63
										)                                                                                                       // 63
									),                                                                                                       // 63
									React.createElement(                                                                                     // 66
										'button',                                                                                               // 66
										{ className: 'btn btn-primary', onClick: this.handleClick.bind(this, article) },                        // 66
										'Save'                                                                                                  // 66
									)                                                                                                        // 66
								)                                                                                                         // 62
							),                                                                                                         // 60
							React.createElement(                                                                                       // 69
								'p',                                                                                                      // 69
								null,                                                                                                     // 69
								'Date Published: ',                                                                                       // 69
								article.pub_date                                                                                          // 69
							)                                                                                                          // 69
						)                                                                                                           // 58
					);                                                                                                           // 56
				}.bind(this));                                                                                                // 77
			}                                                                                                              // 79
                                                                                                                  //
			return React.createElement(                                                                                    // 81
				'div',                                                                                                        // 82
				{ className: 'main-container' },                                                                              // 82
				React.createElement(                                                                                          // 85
					'div',                                                                                                       // 85
					{ className: 'row' },                                                                                        // 85
					React.createElement(                                                                                         // 86
						'div',                                                                                                      // 86
						{ className: 'col-lg-12' },                                                                                 // 86
						React.createElement(                                                                                        // 88
							'div',                                                                                                     // 88
							{ className: 'panel panel-primary' },                                                                      // 88
							React.createElement(                                                                                       // 89
								'div',                                                                                                    // 89
								{ className: 'panel-heading' },                                                                           // 89
								React.createElement(                                                                                      // 90
									'h1',                                                                                                    // 90
									{ className: 'panel-title' },                                                                            // 90
									React.createElement(                                                                                     // 90
										'strong',                                                                                               // 90
										null,                                                                                                   // 90
										React.createElement('i', { className: 'fa fa-list-alt' }),                                              // 90
										'  Results'                                                                                             // 90
									)                                                                                                        // 90
								)                                                                                                         // 90
							),                                                                                                         // 89
							React.createElement(                                                                                       // 92
								'div',                                                                                                    // 92
								{ className: 'panel-body' },                                                                              // 92
								React.createElement(                                                                                      // 93
									'ul',                                                                                                    // 93
									{ className: 'list-group' },                                                                             // 93
									articles                                                                                                 // 95
								)                                                                                                         // 93
							)                                                                                                          // 92
						)                                                                                                           // 88
					)                                                                                                            // 86
				)                                                                                                             // 85
			);                                                                                                             // 82
		}                                                                                                               // 111
                                                                                                                  //
		return render;                                                                                                  // 33
	}()                                                                                                              // 33
                                                                                                                  //
});                                                                                                               // 8
                                                                                                                  //
// Export the module back to the route                                                                            //
module.exports = Results;                                                                                         // 116
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"Main.js":["react-bootstrap","react","react-router",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/Main.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var Navbar;module.import('react-bootstrap',{"Navbar":function(v){Navbar=v}});var NavItem;module.import('react-bootstrap',{"NavItem":function(v){NavItem=v}});var NavDropdown;module.import('react-bootstrap',{"NavDropdown":function(v){NavDropdown=v}});var MenuItem;module.import('react-bootstrap',{"MenuItem":function(v){MenuItem=v}});var Nav;module.import('react-bootstrap',{"Nav":function(v){Nav=v}});// Include React and React-Router dependencies
var React = require('react');                                                                                     // 2
var Router = require('react-router');                                                                             // 3
                                                                                                                  // 4
                                                                                                                  // 5
                                                                                                                  // 6
                                                                                                                  // 7
                                                                                                                  // 8
                                                                                                                  //
var Main = React.createClass({                                                                                    // 11
		displayName: 'Main',                                                                                            // 11
                                                                                                                  //
                                                                                                                  //
		render: function () {                                                                                           // 13
				function render() {                                                                                           // 13
                                                                                                                  //
						return(                                                                                                     // 15
                                                                                                                  //
								/*We can only render a single div. So we need to group everything inside of this main-container one*/     //
								React.createElement(                                                                                      // 22
										'div',                                                                                                  // 22
										{ className: 'row' },                                                                                   // 22
										React.createElement(                                                                                    // 23
												'div',                                                                                                // 23
												{ className: 'container' },                                                                           // 23
												React.createElement(                                                                                  // 26
														'nav',                                                                                              // 26
														{ className: 'bg-warning navbar-dark theNavBar' },                                                  // 26
														React.createElement(                                                                                // 27
																'div',                                                                                            // 27
																{ className: 'container-fluid' },                                                                 // 27
																React.createElement(                                                                              // 28
																		'div',                                                                                          // 28
																		{ className: 'navbar-header' },                                                                 // 28
																		React.createElement(                                                                            // 29
																				'a',                                                                                          // 29
																				{ href: '/' },                                                                                // 29
																				React.createElement('img', { src: 'https://s10.postimg.org/dfh868909/Questive_Logo.png', height: '50', width: '150', className: 'logoArea' })
																		)                                                                                               // 29
																),                                                                                                // 28
																React.createElement(                                                                              // 32
																		'div',                                                                                          // 32
																		{ className: 'collapse navbar-collapse navbar-ex1-collapse' },                                  // 32
																		React.createElement(                                                                            // 34
																				'ul',                                                                                         // 34
																				{ className: 'nav navbar-nav navbar-right' },                                                 // 34
																				React.createElement(                                                                          // 35
																						'li',                                                                                       // 35
																						null,                                                                                       // 35
																						React.createElement('img', { src: 'http://blog.roblox.com/wp-content/uploads/2014/04/Points-Icon-700px.png', height: '48', width: '48' })
																				),                                                                                            // 35
																				React.createElement(                                                                          // 36
																						'li',                                                                                       // 36
																						null,                                                                                       // 36
																						React.createElement(                                                                        // 36
																								'a',                                                                                      // 36
																								{ href: '/Create', 'class': 'navWords' },                                                 // 36
																								'Create'                                                                                  // 36
																						)                                                                                           // 36
																				)                                                                                             // 36
																		),                                                                                              // 34
																		React.createElement(                                                                            // 39
																				'ul',                                                                                         // 39
																				{ className: 'nav navbar-nav navbar-right' },                                                 // 39
																				React.createElement(                                                                          // 40
																						'li',                                                                                       // 40
																						null,                                                                                       // 40
																						React.createElement('img', { src: 'http://www.engage2excel.com/wp-content/uploads/2015/09/Contests-icon.png', height: '48', width: '48' })
																				),                                                                                            // 40
																				React.createElement(                                                                          // 41
																						'li',                                                                                       // 41
																						null,                                                                                       // 41
																						React.createElement(                                                                        // 41
																								'a',                                                                                      // 41
																								{ href: '/join', 'class': 'navWords' },                                                   // 41
																								'Join'                                                                                    // 41
																						)                                                                                           // 41
																				)                                                                                             // 41
																		),                                                                                              // 39
																		React.createElement(                                                                            // 44
																				'ul',                                                                                         // 44
																				{ className: 'nav navbar-nav navbar-right' },                                                 // 44
																				React.createElement(                                                                          // 45
																						'li',                                                                                       // 45
																						null,                                                                                       // 45
																						React.createElement('img', { src: 'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png', height: '48', width: '48' })
																				),                                                                                            // 45
																				React.createElement(                                                                          // 46
																						'li',                                                                                       // 46
																						null,                                                                                       // 46
																						React.createElement(                                                                        // 46
																								'a',                                                                                      // 46
																								{ href: '/Leaderboards', 'class': 'navWords' },                                           // 46
																								'Leaderboards'                                                                            // 46
																						)                                                                                           // 46
																				)                                                                                             // 46
																		),                                                                                              // 44
																		React.createElement(                                                                            // 49
																				'ul',                                                                                         // 49
																				{ className: 'nav navbar-nav navbar-right navbar-for-responsiveness' },                       // 49
																				React.createElement(                                                                          // 50
																						'li',                                                                                       // 50
																						null,                                                                                       // 50
																						React.createElement('img', { src: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg', height: '48', width: '48' })
																				),                                                                                            // 50
																				React.createElement(                                                                          // 51
																						'li',                                                                                       // 51
																						null,                                                                                       // 51
																						React.createElement(                                                                        // 51
																								'a',                                                                                      // 51
																								{ href: '/profile', 'class': 'navWords' },                                                // 51
																								'Profile'                                                                                 // 51
																						)                                                                                           // 51
																				)                                                                                             // 51
																		)                                                                                               // 49
																)                                                                                                 // 32
														)                                                                                                   // 27
												),                                                                                                    // 26
												React.createElement(                                                                                  // 56
														Navbar,                                                                                             // 56
														null,                                                                                               // 56
														React.createElement(                                                                                // 57
																Navbar.Header,                                                                                    // 57
																null,                                                                                             // 57
																React.createElement(                                                                              // 58
																		Navbar.Brand,                                                                                   // 58
																		null,                                                                                           // 58
																		React.createElement('img', { src: 'https://s10.postimg.org/dfh868909/Questive_Logo.png', height: '200', width: '100' })
																)                                                                                                 // 58
														),                                                                                                  // 57
														React.createElement(                                                                                // 62
																Nav,                                                                                              // 62
																null,                                                                                             // 62
																React.createElement(                                                                              // 63
																		NavItem,                                                                                        // 63
																		{ eventKey: 1, href: '/Profile' },                                                              // 63
																		React.createElement('img', { src: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg', height: '48', width: '48' }),
																		'  Profile'                                                                                     // 63
																),                                                                                                // 63
																React.createElement(                                                                              // 64
																		NavItem,                                                                                        // 64
																		{ eventKey: 2, href: '/Leaderboards' },                                                         // 64
																		React.createElement('img', { src: 'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png', height: '48', width: '48' }),
																		'  Leaderboards'                                                                                // 64
																),                                                                                                // 64
																React.createElement(                                                                              // 65
																		NavItem,                                                                                        // 65
																		{ eventKey: 3, href: '/join' },                                                                 // 65
																		React.createElement('img', { src: 'http://www.engage2excel.com/wp-content/uploads/2015/09/Contests-icon.png', height: '48', width: '48' }),
																		'  Join'                                                                                        // 65
																),                                                                                                // 65
																React.createElement(                                                                              // 66
																		NavItem,                                                                                        // 66
																		{ eventKey: 4, href: '/create' },                                                               // 66
																		React.createElement('img', { src: 'http://blog.roblox.com/wp-content/uploads/2014/04/Points-Icon-700px.png', height: '48', width: '48' }),
																		'  Create'                                                                                      // 66
																)                                                                                                 // 66
														)                                                                                                   // 62
												),                                                                                                    // 56
												this.props.children                                                                                   // 70
										)                                                                                                       // 23
								)                                                                                                         // 22
						);                                                                                                          // 15
				}                                                                                                             // 74
                                                                                                                  //
				return render;                                                                                                // 13
		}()                                                                                                             // 13
});                                                                                                               // 11
                                                                                                                  //
// Export the module back to the route                                                                            //
module.export("default",exports.default=(Main));                                                                  // 78
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"create.js":["react-bootstrap","react","react-router","./Search/Query","./Search/Results","react-dom",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/create.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var Button;module.import('react-bootstrap',{"Button":function(v){Button=v}});var Checkbox;module.import('react-bootstrap',{"Checkbox":function(v){Checkbox=v}});var FieldGroup;module.import('react-bootstrap',{"FieldGroup":function(v){FieldGroup=v}});var FormControl;module.import('react-bootstrap',{"FormControl":function(v){FormControl=v}});var FormGroup;module.import('react-bootstrap',{"FormGroup":function(v){FormGroup=v}});var Radio;module.import('react-bootstrap',{"Radio":function(v){Radio=v}});var ControlLabel;module.import('react-bootstrap',{"ControlLabel":function(v){ControlLabel=v}});var Well;module.import('react-bootstrap',{"Well":function(v){Well=v}});var Panel;module.import('react-bootstrap',{"Panel":function(v){Panel=v}});var ListGroup;module.import('react-bootstrap',{"ListGroup":function(v){ListGroup=v}});var ListGroupItem;module.import('react-bootstrap',{"ListGroupItem":function(v){ListGroupItem=v}});var Pager;module.import('react-bootstrap',{"Pager":function(v){Pager=v}});var PageHeader;module.import('react-bootstrap',{"PageHeader":function(v){PageHeader=v}});var React = require('react');
var Router = require('react-router');                                                                             // 2
var Query = require('./Search/Query');                                                                            // 3
var Results = require('./Search/Results');                                                                        // 4
var ReactDOM = require('react-dom');                                                                              // 5
                                                                                                                  // 6
                                                                                                                  // 7
                                                                                                                  // 8
                                                                                                                  // 9
                                                                                                                  // 10
                                                                                                                  // 11
                                                                                                                  // 12
                                                                                                                  // 13
                                                                                                                  // 14
                                                                                                                  // 15
                                                                                                                  // 16
                                                                                                                  // 17
                                                                                                                  // 18
                                                                                                                  //
var _counter = 0;                                                                                                 // 20
                                                                                                                  //
var Create = React.createClass({                                                                                  // 22
  displayName: 'Create',                                                                                          // 22
                                                                                                                  //
  render: function () {                                                                                           // 23
    function render() {                                                                                           // 23
      return React.createElement(                                                                                 // 24
        'div',                                                                                                    // 25
        { 'class': 'add' },                                                                                       // 25
        React.createElement(                                                                                      // 26
          'div',                                                                                                  // 26
          { className: 'main-container' },                                                                        // 26
          React.createElement(                                                                                    // 27
            'div',                                                                                                // 27
            { className: 'container' },                                                                           // 27
            React.createElement(                                                                                  // 28
              'center',                                                                                           // 28
              null,                                                                                               // 28
              React.createElement(                                                                                // 28
                PageHeader,                                                                                       // 28
                null,                                                                                             // 28
                'Create A Contest'                                                                                // 28
              )                                                                                                   // 28
            ),                                                                                                    // 28
            React.createElement('div', null),                                                                     // 29
            React.createElement(                                                                                  // 30
              'form',                                                                                             // 30
              null,                                                                                               // 30
              React.createElement(                                                                                // 31
                ControlLabel,                                                                                     // 31
                null,                                                                                             // 31
                'Contest Name'                                                                                    // 31
              ),                                                                                                  // 31
              React.createElement(FormControl, { type: 'text', placeholder: 'Give your contest a title' }),       // 32
              React.createElement('br', null),                                                                    // 33
              React.createElement(                                                                                // 34
                FormGroup,                                                                                        // 34
                { controlId: 'formControlsTextarea' },                                                            // 34
                React.createElement(                                                                              // 35
                  ControlLabel,                                                                                   // 35
                  null,                                                                                           // 35
                  'Contest Description'                                                                           // 35
                ),                                                                                                // 35
                React.createElement(FormControl, { componentClass: 'textarea', placeholder: 'Enter a description for your contest' })
              ),                                                                                                  // 34
              React.createElement('br', null),                                                                    // 38
              React.createElement(                                                                                // 39
                FormGroup,                                                                                        // 39
                null,                                                                                             // 39
                React.createElement(                                                                              // 40
                  ControlLabel,                                                                                   // 40
                  null,                                                                                           // 40
                  'Add the instructions for your contest below! Click to Expand.'                                 // 40
                )                                                                                                 // 40
              ),                                                                                                  // 39
              React.createElement(                                                                                // 43
                Panel,                                                                                            // 43
                { collapsible: true, defaultExpanded: false, header: 'Task 1' },                                  // 43
                React.createElement(                                                                              // 44
                  ListGroup,                                                                                      // 44
                  { fill: true },                                                                                 // 44
                  React.createElement(                                                                            // 45
                    ListGroupItem,                                                                                // 45
                    null,                                                                                         // 45
                    'Action:  ',                                                                                  // 45
                    React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })                 // 45
                  ),                                                                                              // 45
                  React.createElement(                                                                            // 46
                    ListGroupItem,                                                                                // 46
                    null,                                                                                         // 46
                    'Location: ',                                                                                 // 46
                    React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' }),                // 46
                    ' '                                                                                           // 46
                  ),                                                                                              // 46
                  React.createElement(                                                                            // 47
                    ListGroupItem,                                                                                // 47
                    null,                                                                                         // 47
                    'Additional Info: ',                                                                          // 47
                    React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })                 // 47
                  )                                                                                               // 47
                )                                                                                                 // 44
              ),                                                                                                  // 43
              React.createElement(                                                                                // 52
                Panel,                                                                                            // 52
                { collapsible: true, defaultExpanded: false, header: 'Task 2' },                                  // 52
                React.createElement(                                                                              // 53
                  ListGroup,                                                                                      // 53
                  { fill: true },                                                                                 // 53
                  React.createElement(                                                                            // 54
                    ListGroupItem,                                                                                // 54
                    null,                                                                                         // 54
                    'Action:  ',                                                                                  // 54
                    React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })                 // 54
                  ),                                                                                              // 54
                  React.createElement(                                                                            // 55
                    ListGroupItem,                                                                                // 55
                    null,                                                                                         // 55
                    'Location: ',                                                                                 // 55
                    React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' }),                // 55
                    ' '                                                                                           // 55
                  ),                                                                                              // 55
                  React.createElement(                                                                            // 56
                    ListGroupItem,                                                                                // 56
                    null,                                                                                         // 56
                    'Additional Info: ',                                                                          // 56
                    React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })                 // 56
                  )                                                                                               // 56
                )                                                                                                 // 53
              ),                                                                                                  // 52
              React.createElement(                                                                                // 60
                Panel,                                                                                            // 60
                { collapsible: true, defaultExpanded: false, header: 'Task 3' },                                  // 60
                React.createElement(                                                                              // 61
                  ListGroup,                                                                                      // 61
                  { fill: true },                                                                                 // 61
                  React.createElement(                                                                            // 62
                    ListGroupItem,                                                                                // 62
                    null,                                                                                         // 62
                    'Action:  ',                                                                                  // 62
                    React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })                 // 62
                  ),                                                                                              // 62
                  React.createElement(                                                                            // 63
                    ListGroupItem,                                                                                // 63
                    null,                                                                                         // 63
                    'Location: ',                                                                                 // 63
                    React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' }),                // 63
                    ' '                                                                                           // 63
                  ),                                                                                              // 63
                  React.createElement(                                                                            // 64
                    ListGroupItem,                                                                                // 64
                    null,                                                                                         // 64
                    'Additional Info: ',                                                                          // 64
                    React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })                 // 64
                  )                                                                                               // 64
                )                                                                                                 // 61
              ),                                                                                                  // 60
              React.createElement(                                                                                // 70
                'div',                                                                                            // 70
                { id: 'placeholder' },                                                                            // 70
                React.createElement(                                                                              // 71
                  'div',                                                                                          // 71
                  { id: 'template' },                                                                             // 71
                  React.createElement(                                                                            // 72
                    Panel,                                                                                        // 72
                    { collapsible: true, defaultExpanded: true, header: 'Additional Tasks' },                     // 72
                    React.createElement(                                                                          // 73
                      ListGroup,                                                                                  // 73
                      { fill: true },                                                                             // 73
                      React.createElement(                                                                        // 74
                        ListGroupItem,                                                                            // 74
                        null,                                                                                     // 74
                        'Action:  ',                                                                              // 74
                        React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })             // 74
                      ),                                                                                          // 74
                      React.createElement(                                                                        // 75
                        ListGroupItem,                                                                            // 75
                        null,                                                                                     // 75
                        'Location: ',                                                                             // 75
                        React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' }),            // 75
                        ' '                                                                                       // 75
                      ),                                                                                          // 75
                      React.createElement(                                                                        // 76
                        ListGroupItem,                                                                            // 76
                        null,                                                                                     // 76
                        'Additional Info: ',                                                                      // 76
                        React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })             // 76
                      )                                                                                           // 76
                    )                                                                                             // 73
                  )                                                                                               // 72
                )                                                                                                 // 71
              ),                                                                                                  // 70
              React.createElement(                                                                                // 88
                Pager,                                                                                            // 88
                null,                                                                                             // 88
                React.createElement(                                                                              // 89
                  Pager.Item,                                                                                     // 89
                  { onClick: this.Add, previous: true, href: '#' },                                               // 89
                  'Add Additional Tasks →'                                                                        // 89
                )                                                                                                 // 89
              ),                                                                                                  // 88
              React.createElement('br', null),                                                                    // 93
              React.createElement(                                                                                // 95
                'div',                                                                                            // 95
                { className: 'well' },                                                                            // 95
                React.createElement(                                                                              // 96
                  Button,                                                                                         // 96
                  { bsSize: 'large', block: true },                                                               // 96
                  'Submit Contest'                                                                                // 96
                )                                                                                                 // 96
              )                                                                                                   // 95
            )                                                                                                     // 30
          )                                                                                                       // 27
        )                                                                                                         // 26
      );                                                                                                          // 25
    }                                                                                                             // 103
                                                                                                                  //
    return render;                                                                                                // 23
  }(),                                                                                                            // 23
                                                                                                                  //
  createField: function () {                                                                                      // 105
    function createField() {                                                                                      // 105
      $('#newField').append(React.createElement(                                                                  // 106
        Panel,                                                                                                    // 106
        { collapsible: true, defaultExpanded: false, header: 'Additional Item' },                                 // 106
        React.createElement(                                                                                      // 107
          ListGroup,                                                                                              // 107
          { fill: true },                                                                                         // 107
          React.createElement(                                                                                    // 108
            ListGroupItem,                                                                                        // 108
            null,                                                                                                 // 108
            'Action:  ',                                                                                          // 108
            React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })                         // 108
          ),                                                                                                      // 108
          React.createElement(                                                                                    // 109
            ListGroupItem,                                                                                        // 109
            null,                                                                                                 // 109
            'Location: ',                                                                                         // 109
            React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' }),                        // 109
            ' '                                                                                                   // 109
          ),                                                                                                      // 109
          React.createElement(                                                                                    // 110
            ListGroupItem,                                                                                        // 110
            null,                                                                                                 // 110
            'Additional Info: ',                                                                                  // 110
            React.createElement(FormControl, { type: 'text', placeholder: 'Enter text' })                         // 110
          )                                                                                                       // 110
        )                                                                                                         // 107
      ));                                                                                                         // 106
    }                                                                                                             // 113
                                                                                                                  //
    return createField;                                                                                           // 105
  }(),                                                                                                            // 105
                                                                                                                  //
  Add: function () {                                                                                              // 115
    function Add() {                                                                                              // 115
      _counter++;                                                                                                 // 116
      var oClone = document.getElementById("template").cloneNode(true);                                           // 117
      oClone.id += _counter + "";                                                                                 // 118
      document.getElementById("placeholder").appendChild(oClone);                                                 // 119
    }                                                                                                             // 120
                                                                                                                  //
    return Add;                                                                                                   // 115
  }()                                                                                                             // 115
                                                                                                                  //
});                                                                                                               // 22
module.export("default",exports.default=(Create));                                                                // 123
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"join.js":["react","react-router","./Search/Query","./Search/Results",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/join.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var React = require('react');                                                                                     // 1
var Router = require('react-router');                                                                             // 2
var Query = require('./Search/Query');                                                                            // 3
var Results = require('./Search/Results');                                                                        // 4
                                                                                                                  //
var Join = React.createClass({                                                                                    // 6
	displayName: 'Join',                                                                                             // 6
                                                                                                                  //
                                                                                                                  //
	/*Here we set the initial state variables (this allows us to propagate the variables for maniuplation by the children components*/
	/*Also note the "resuls" state. This will be where we hold the data from our results*/                           //
	getInitialState: function () {                                                                                   // 10
		function getInitialState() {                                                                                    // 10
			return {                                                                                                       // 11
				queryTerm: "",                                                                                                // 12
				startYear: "",                                                                                                // 13
				endYear: "",                                                                                                  // 14
				results: {}                                                                                                   // 15
			};                                                                                                             // 11
		}                                                                                                               // 17
                                                                                                                  //
		return getInitialState;                                                                                         // 10
	}(),                                                                                                             // 10
                                                                                                                  //
	/*This function gets called if the user searches for a completely new set of parameters (i.e. if any of the search terms changes)*/
	/*If the user searches for the exact same thing, then React will ignore it.*/                                    //
	componentDidUpdate: function () {                                                                                // 22
		function componentDidUpdate(prevProps, prevState) {                                                             // 22
			console.log("COMPONENT UPDATED");                                                                              // 23
			console.log(this.state.queryTerm);                                                                             // 24
			console.log(this.state.startYear);                                                                             // 25
			console.log(this.state.endYear);                                                                               // 26
                                                                                                                  //
			console.log("Previous State", prevState);                                                                      // 28
                                                                                                                  //
			if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear)) {
				helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear).then(function (data) {       // 33
					if (data != this.state.results) {                                                                            // 35
						this.setState({                                                                                             // 37
							results: data                                                                                              // 38
						});                                                                                                         // 37
					}                                                                                                            // 40
                                                                                                                  //
					// console.log("RESULTS", results)                                                                           //
					// console.log("DATA", data)                                                                                 //
                                                                                                                  //
					// This code is necessary to bind the keyword "this" when we say this.setState                               //
					// to actually mean the component itself and not the runQuery function.                                      //
				}.bind(this));                                                                                                // 47
			}                                                                                                              // 48
		}                                                                                                               // 49
                                                                                                                  //
		return componentDidUpdate;                                                                                      // 22
	}(),                                                                                                             // 22
                                                                                                                  //
	// This function will be passed down into children components so they can change the "parent"                    //
	// i.e we will pass this method to the query component that way it can change the main component                 //
	// to perform a new search                                                                                       //
	setQuery: function () {                                                                                          // 54
		function setQuery(newQuery, newStart, newEnd) {                                                                 // 54
			console.log("TEST");                                                                                           // 55
			this.setState({                                                                                                // 56
				queryTerm: newQuery,                                                                                          // 57
				startYear: newStart,                                                                                          // 58
				endYear: newEnd                                                                                               // 59
			});                                                                                                            // 56
		}                                                                                                               // 61
                                                                                                                  //
		return setQuery;                                                                                                // 54
	}(),                                                                                                             // 54
                                                                                                                  //
	/*Render the function. Note how we deploy both the Query and the Results*/render: function () {                  //
		function render() {                                                                                             // 64
			console.log("Render Results", this.state.results);                                                             // 65
                                                                                                                  //
			return React.createElement(                                                                                    // 67
				'div',                                                                                                        // 69
				{ className: 'main-container' },                                                                              // 69
				React.createElement(Query, { updateSearch: this.setQuery }),                                                  // 72
				React.createElement(Results, { results: this.state.results })                                                 // 75
			);                                                                                                             // 69
		}                                                                                                               // 80
                                                                                                                  //
		return render;                                                                                                  // 64
	}()                                                                                                              // 64
});                                                                                                               // 6
                                                                                                                  //
// Export the module back to the route                                                                            //
module.export("default",exports.default=(Join));                                                                  // 84
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"leaderboards.js":["react-bootstrap","react","react-router","./Search/Query","./Search/Results",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/leaderboards.js                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var Button;module.import('react-bootstrap',{"Button":function(v){Button=v}});var React = require('react');        // 1
var Router = require('react-router');                                                                             // 2
var Query = require('./Search/Query');                                                                            // 3
var Results = require('./Search/Results');                                                                        // 4
                                                                                                                  // 5
                                                                                                                  //
var Leaderboards = React.createClass({                                                                            // 8
  displayName: 'Leaderboards',                                                                                    // 8
                                                                                                                  //
  getInitialState: function () {                                                                                  // 9
    function getInitialState() {                                                                                  // 9
      return {                                                                                                    // 10
        searchResults: []                                                                                         // 12
      };                                                                                                          // 11
    }                                                                                                             // 15
                                                                                                                  //
    return getInitialState;                                                                                       // 9
  }(),                                                                                                            // 9
  showResults: function () {                                                                                      // 16
    function showResults(response) {                                                                              // 16
      console.log("Showing");                                                                                     // 17
      this.setState({                                                                                             // 18
        searchResults: response                                                                                   // 19
      });                                                                                                         // 18
    }                                                                                                             // 21
                                                                                                                  //
    return showResults;                                                                                           // 16
  }(),                                                                                                            // 16
  search: function () {                                                                                           // 22
    function search(URL) {                                                                                        // 22
      console.log("searching");                                                                                   // 23
      $.ajax({                                                                                                    // 24
        type: "GET",                                                                                              // 25
        dataType: 'jsonp',                                                                                        // 26
        url: URL,                                                                                                 // 27
        success: function (jsonData) {                                                                            // 28
          this.showResults(jsonData);                                                                             // 29
        }.bind(this)                                                                                              // 30
      });                                                                                                         // 24
    }                                                                                                             // 32
                                                                                                                  //
    return search;                                                                                                // 22
  }(),                                                                                                            // 22
  componentDidMount: function () {                                                                                // 33
    function componentDidMount() {                                                                                // 33
      this.search("userlinkhere");                                                                                // 34
    }                                                                                                             // 35
                                                                                                                  //
    return componentDidMount;                                                                                     // 33
  }(),                                                                                                            // 33
  render: function () {                                                                                           // 36
    function render() {                                                                                           // 36
      return React.createElement(                                                                                 // 37
        'div',                                                                                                    // 38
        null,                                                                                                     // 38
        React.createElement(SearchBox, { search: this.search }),                                                  // 39
        React.createElement(Results, { searchResults: this.state.searchResults })                                 // 40
      );                                                                                                          // 38
    }                                                                                                             // 43
                                                                                                                  //
    return render;                                                                                                // 36
  }()                                                                                                             // 36
});                                                                                                               // 8
                                                                                                                  //
var SearchBox = React.createClass({                                                                               // 46
  displayName: 'SearchBox',                                                                                       // 46
                                                                                                                  //
  createAjax: function () {                                                                                       // 47
    function createAjax() {                                                                                       // 47
      var category = ReactDOM.findDOMNode(this.refs.category).value;                                              // 48
      if (category == "alltime") {                                                                                // 49
        var URL = "userlinkhere";                                                                                 // 50
      } else {                                                                                                    // 51
        var URL = "userlinkhere";                                                                                 // 52
      }                                                                                                           // 53
      this.props.search(URL);                                                                                     // 54
    }                                                                                                             // 55
                                                                                                                  //
    return createAjax;                                                                                            // 47
  }(),                                                                                                            // 47
  render: function () {                                                                                           // 56
    function render() {                                                                                           // 56
      return React.createElement(                                                                                 // 57
        'div',                                                                                                    // 58
        null,                                                                                                     // 58
        React.createElement(                                                                                      // 59
          'label',                                                                                                // 59
          null,                                                                                                   // 59
          'Sort By:'                                                                                              // 59
        ),                                                                                                        // 59
        React.createElement(                                                                                      // 60
          'select',                                                                                               // 60
          { ref: 'category' },                                                                                    // 60
          React.createElement(                                                                                    // 61
            'option',                                                                                             // 61
            { value: 'alltime' },                                                                                 // 61
            'All'                                                                                                 // 61
          ),                                                                                                      // 61
          React.createElement(                                                                                    // 62
            'option',                                                                                             // 62
            { value: 'recent' },                                                                                  // 62
            'Recent'                                                                                              // 62
          )                                                                                                       // 62
        ),                                                                                                        // 60
        React.createElement(                                                                                      // 64
          Button,                                                                                                 // 64
          { bsSize: 'xsmall', input: true, type: 'submit', onClick: this.createAjax },                            // 64
          'Sort'                                                                                                  // 64
        )                                                                                                         // 64
      );                                                                                                          // 58
    }                                                                                                             // 68
                                                                                                                  //
    return render;                                                                                                // 56
  }()                                                                                                             // 56
});                                                                                                               // 46
                                                                                                                  //
var Results = React.createClass({                                                                                 // 71
  displayName: 'Results',                                                                                         // 71
                                                                                                                  //
  render: function () {                                                                                           // 72
    function render() {                                                                                           // 72
      var resultItems = this.props.searchResults.map(function (result, index) {                                   // 73
        return React.createElement(ResultItem, { key: index, reactKey: index, username: result.username, alltime: result.alltime, recent: result.recent, imageUrl: result.img });
      });                                                                                                         // 77
      return React.createElement(                                                                                 // 78
        'table',                                                                                                  // 79
        { className: 'table table-striped' },                                                                     // 79
        React.createElement(                                                                                      // 80
          'thead',                                                                                                // 80
          null,                                                                                                   // 80
          React.createElement(                                                                                    // 81
            'tr',                                                                                                 // 81
            null,                                                                                                 // 81
            React.createElement(                                                                                  // 82
              'th',                                                                                               // 82
              null,                                                                                               // 82
              '#'                                                                                                 // 82
            ),                                                                                                    // 82
            React.createElement(                                                                                  // 83
              'th',                                                                                               // 83
              null,                                                                                               // 83
              'Username'                                                                                          // 83
            ),                                                                                                    // 83
            React.createElement(                                                                                  // 84
              'th',                                                                                               // 84
              null,                                                                                               // 84
              'Points'                                                                                            // 84
            ),                                                                                                    // 84
            React.createElement(                                                                                  // 85
              'th',                                                                                               // 85
              null,                                                                                               // 85
              'Something else'                                                                                    // 85
            )                                                                                                     // 85
          )                                                                                                       // 81
        ),                                                                                                        // 80
        React.createElement(                                                                                      // 88
          'tbody',                                                                                                // 88
          null,                                                                                                   // 88
          resultItems                                                                                             // 89
        )                                                                                                         // 88
      );                                                                                                          // 79
    }                                                                                                             // 93
                                                                                                                  //
    return render;                                                                                                // 72
  }()                                                                                                             // 72
});                                                                                                               // 71
                                                                                                                  //
var ResultItem = React.createClass({                                                                              // 96
  displayName: 'ResultItem',                                                                                      // 96
                                                                                                                  //
  render: function () {                                                                                           // 97
    function render() {                                                                                           // 97
      var imageStyle = {                                                                                          // 98
        width: '50px',                                                                                            // 99
        height: '50px'                                                                                            // 100
      };                                                                                                          // 98
      return React.createElement(                                                                                 // 102
        'tr',                                                                                                     // 103
        null,                                                                                                     // 103
        React.createElement(                                                                                      // 104
          'td',                                                                                                   // 104
          null,                                                                                                   // 104
          this.props.reactKey                                                                                     // 104
        ),                                                                                                        // 104
        React.createElement(                                                                                      // 105
          'td',                                                                                                   // 105
          null,                                                                                                   // 105
          React.createElement('img', { src: this.props.imageUrl, style: imageStyle }),                            // 105
          ' ',                                                                                                    // 105
          this.props.username                                                                                     // 105
        ),                                                                                                        // 105
        React.createElement(                                                                                      // 106
          'td',                                                                                                   // 106
          null,                                                                                                   // 106
          this.props.recent                                                                                       // 106
        ),                                                                                                        // 106
        React.createElement(                                                                                      // 107
          'td',                                                                                                   // 107
          null,                                                                                                   // 107
          this.props.alltime                                                                                      // 107
        )                                                                                                         // 107
      );                                                                                                          // 103
    }                                                                                                             // 110
                                                                                                                  //
    return render;                                                                                                // 97
  }()                                                                                                             // 97
});                                                                                                               // 96
                                                                                                                  //
module.export("default",exports.default=(Leaderboards));                                                          // 114
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"profile.js":["react-bootstrap","react","react-router","./Search/Query","./Search/Results",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/profile.js                                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var Button;module.import('react-bootstrap',{"Button":function(v){Button=v}});var React = require('react');        // 1
var Router = require('react-router');                                                                             // 2
var Query = require('./Search/Query');                                                                            // 3
var Results = require('./Search/Results');                                                                        // 4
                                                                                                                  // 5
                                                                                                                  //
var Profile = React.createClass({                                                                                 // 7
  displayName: 'Profile',                                                                                         // 7
                                                                                                                  //
  render: function () {                                                                                           // 8
    function render() {                                                                                           // 8
      return React.createElement(                                                                                 // 9
        'div',                                                                                                    // 10
        { className: 'main-container' },                                                                          // 10
        React.createElement(                                                                                      // 11
          'div',                                                                                                  // 11
          { className: 'container' },                                                                             // 11
          React.createElement(                                                                                    // 12
            'div',                                                                                                // 12
            { className: 'row' },                                                                                 // 12
            React.createElement(                                                                                  // 13
              'div',                                                                                              // 13
              { className: 'col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6' },                                 // 13
              React.createElement(                                                                                // 14
                'div',                                                                                            // 14
                { className: 'well profile' },                                                                    // 14
                React.createElement(                                                                              // 15
                  'div',                                                                                          // 15
                  { className: 'col-sm-12' },                                                                     // 15
                  React.createElement(                                                                            // 16
                    'div',                                                                                        // 16
                    { className: 'col-xs-12 col-sm-5' },                                                          // 16
                    React.createElement(                                                                          // 18
                      'span',                                                                                     // 18
                      { className: 'headMain' },                                                                  // 18
                      React.createElement(                                                                        // 18
                        'p',                                                                                      // 18
                        { className: 'strong text-center' },                                                      // 18
                        'Tyler Fallon'                                                                            // 18
                      ),                                                                                          // 18
                      React.createElement('img', { src: 'https://t4.ftcdn.net/jpg/01/18/03/35/160_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg', className: 'text-center img-circle imageScale' })
                    )                                                                                             // 18
                  ),                                                                                              // 16
                  React.createElement(                                                                            // 22
                    'div',                                                                                        // 22
                    { className: 'col-xs-12 col-sm-7 text-center' },                                              // 22
                    React.createElement(                                                                          // 23
                      'figure',                                                                                   // 23
                      { className: 'justify' },                                                                   // 23
                      React.createElement(                                                                        // 24
                        'p',                                                                                      // 24
                        null,                                                                                     // 24
                        React.createElement(                                                                      // 24
                          'strong',                                                                               // 24
                          null,                                                                                   // 24
                          'About: '                                                                               // 24
                        ),                                                                                        // 24
                        ' Full Stack Developer / UI Designer / General Boss '                                     // 24
                      ),                                                                                          // 24
                      React.createElement(                                                                        // 25
                        'p',                                                                                      // 25
                        null,                                                                                     // 25
                        React.createElement(                                                                      // 25
                          'strong',                                                                               // 25
                          null,                                                                                   // 25
                          'Hobbies: '                                                                             // 25
                        ),                                                                                        // 25
                        ' Blackjack UI/UX '                                                                       // 25
                      ),                                                                                          // 25
                      React.createElement(                                                                        // 26
                        'p',                                                                                      // 26
                        null,                                                                                     // 26
                        React.createElement(                                                                      // 26
                          'strong',                                                                               // 26
                          null,                                                                                   // 26
                          'Contests Completed:'                                                                   // 26
                        )                                                                                         // 26
                      ),                                                                                          // 26
                      React.createElement(                                                                        // 27
                        'span',                                                                                   // 27
                        { className: 'tags' },                                                                    // 27
                        'AC Hunt'                                                                                 // 27
                      )                                                                                           // 27
                    )                                                                                             // 23
                  )                                                                                               // 22
                ),                                                                                                // 15
                React.createElement(                                                                              // 33
                  'div',                                                                                          // 33
                  { className: 'col-xs-12 divider text-center' },                                                 // 33
                  React.createElement(                                                                            // 34
                    'div',                                                                                        // 34
                    { className: 'col-xs-12 col-sm-6' },                                                          // 34
                    React.createElement(                                                                          // 35
                      'h2',                                                                                       // 35
                      null,                                                                                       // 35
                      React.createElement(                                                                        // 35
                        'strong',                                                                                 // 35
                        null,                                                                                     // 35
                        ' 4 '                                                                                     // 35
                      )                                                                                           // 35
                    ),                                                                                            // 35
                    React.createElement(                                                                          // 36
                      'p',                                                                                        // 36
                      null,                                                                                       // 36
                      React.createElement(                                                                        // 36
                        'small',                                                                                  // 36
                        null,                                                                                     // 36
                        'Followers'                                                                               // 36
                      )                                                                                           // 36
                    ),                                                                                            // 36
                    React.createElement(                                                                          // 37
                      'button',                                                                                   // 37
                      { className: 'btn btn-success btn-block' },                                                 // 37
                      React.createElement('span', { className: 'fa fa-plus-circle' }),                            // 37
                      ' Follow '                                                                                  // 37
                    )                                                                                             // 37
                  ),                                                                                              // 34
                  React.createElement(                                                                            // 39
                    'div',                                                                                        // 39
                    { className: 'col-xs-12 col-sm-6' },                                                          // 39
                    React.createElement(                                                                          // 40
                      'h2',                                                                                       // 40
                      null,                                                                                       // 40
                      React.createElement(                                                                        // 40
                        'strong',                                                                                 // 40
                        null,                                                                                     // 40
                        '1'                                                                                       // 40
                      )                                                                                           // 40
                    ),                                                                                            // 40
                    React.createElement(                                                                          // 41
                      'p',                                                                                        // 41
                      null,                                                                                       // 41
                      React.createElement(                                                                        // 41
                        'small',                                                                                  // 41
                        null,                                                                                     // 41
                        'Contests Completed'                                                                      // 41
                      )                                                                                           // 41
                    ),                                                                                            // 41
                    React.createElement(                                                                          // 42
                      'div',                                                                                      // 42
                      { className: 'btn-group dropup btn-block' },                                                // 42
                      React.createElement(                                                                        // 43
                        'button',                                                                                 // 43
                        { type: 'button', className: 'btn btn-primary btn-block' },                               // 43
                        React.createElement('span', { className: 'fa fa-gear' }),                                 // 43
                        ' Contact User '                                                                          // 43
                      )                                                                                           // 43
                    )                                                                                             // 42
                  )                                                                                               // 39
                )                                                                                                 // 33
              )                                                                                                   // 14
            )                                                                                                     // 13
          )                                                                                                       // 12
        )                                                                                                         // 11
      );                                                                                                          // 10
    }                                                                                                             // 53
                                                                                                                  //
    return render;                                                                                                // 8
  }()                                                                                                             // 8
});                                                                                                               // 7
module.export("default",exports.default=(Profile));                                                               // 55
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"realHome.js":["react","react-router",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// imports/ui/realHome.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// Include React and React-Router dependencies                                                                    //
var React = require('react');                                                                                     // 2
var Router = require('react-router');                                                                             // 3
                                                                                                                  //
var realHome = React.createClass({                                                                                // 5
  displayName: 'realHome',                                                                                        // 5
                                                                                                                  //
                                                                                                                  //
  render: function () {                                                                                           // 7
    function render() {                                                                                           // 7
                                                                                                                  //
      return(                                                                                                     // 9
        /*We can only render a single div. So we need to group everything inside of this main-container one*/     //
        React.createElement(                                                                                      // 11
          'div',                                                                                                  // 11
          { className: 'mainDiv' },                                                                               // 11
          React.createElement(                                                                                    // 12
            'div',                                                                                                // 12
            { className: 'main-container' },                                                                      // 12
            React.createElement(                                                                                  // 13
              'div',                                                                                              // 13
              { className: 'parallax' },                                                                          // 13
              React.createElement(                                                                                // 14
                'div',                                                                                            // 14
                { id: 'group2', className: 'parallax__group' },                                                   // 14
                React.createElement(                                                                              // 15
                  'div',                                                                                          // 15
                  { className: 'parallax__layer parallax__layer--base' },                                         // 15
                  React.createElement(                                                                            // 16
                    'center',                                                                                     // 16
                    null,                                                                                         // 16
                    React.createElement(                                                                          // 16
                      'h3',                                                                                       // 16
                      { className: 'tagline' },                                                                   // 16
                      'Discover. Connect. Adventure. ',                                                           // 16
                      React.createElement('br', null),                                                            // 16
                      ' ',                                                                                        // 16
                      React.createElement('br', null),                                                            // 16
                      React.createElement(                                                                        // 17
                        'center',                                                                                 // 17
                        null,                                                                                     // 17
                        React.createElement(                                                                      // 17
                          'button',                                                                               // 17
                          { type: 'button', className: 'btn btn-danger center', onClick: this.handleSubmit },     // 17
                          React.createElement(                                                                    // 17
                            'h4',                                                                                 // 17
                            null,                                                                                 // 17
                            'Get Started'                                                                         // 17
                          )                                                                                       // 17
                        )                                                                                         // 17
                      ),                                                                                          // 17
                      React.createElement('br', null)                                                             // 17
                    )                                                                                             // 16
                  ),                                                                                              // 16
                  React.createElement('br', null),                                                                // 19
                  React.createElement('br', null),                                                                // 19
                  ' ',                                                                                            // 15
                  React.createElement('br', null),                                                                // 19
                  React.createElement(                                                                            // 20
                    'center',                                                                                     // 20
                    null,                                                                                         // 20
                    React.createElement(                                                                          // 20
                      'h1',                                                                                       // 20
                      { className: 'center' },                                                                    // 20
                      'Welcome to Questive.'                                                                      // 20
                    )                                                                                             // 20
                  )                                                                                               // 20
                ),                                                                                                // 15
                React.createElement('a', { name: 'about' }),                                                      // 22
                React.createElement('div', { className: 'parallax__layer parallax__layer--back black' })          // 23
              ),                                                                                                  // 14
              React.createElement(                                                                                // 27
                'div',                                                                                            // 27
                { id: 'group5', className: 'parallax__group' },                                                   // 27
                React.createElement(                                                                              // 28
                  'div',                                                                                          // 28
                  { className: 'parallax__layer parallax__layer--fore' },                                         // 28
                  React.createElement('div', { className: 'title' })                                              // 29
                ),                                                                                                // 28
                React.createElement(                                                                              // 31
                  'div',                                                                                          // 31
                  { className: 'parallax__layer parallax__layer--base' },                                         // 31
                  React.createElement(                                                                            // 32
                    'div',                                                                                        // 32
                    { className: 'title' },                                                                       // 32
                    '  ',                                                                                         // 32
                    React.createElement(                                                                          // 32
                      'div',                                                                                      // 32
                      { className: 'card-panel', id: 'about' },                                                   // 32
                      React.createElement(                                                                        // 33
                        'h3',                                                                                     // 33
                        { className: 'center' },                                                                  // 33
                        React.createElement(                                                                      // 33
                          'p',                                                                                    // 33
                          { className: 'left whatIs' },                                                           // 33
                          'What is Questive?'                                                                     // 33
                        )                                                                                         // 33
                      ),                                                                                          // 33
                      React.createElement(                                                                        // 34
                        'p',                                                                                      // 34
                        { className: 'center whatIs' },                                                           // 34
                        'Questive is a social web and mobile application that allows you to explore the world around you.'
                      ),                                                                                          // 34
                      React.createElement(                                                                        // 35
                        'p',                                                                                      // 35
                        { className: 'center whatIs' },                                                           // 35
                        'Join contests created by other users or create one yourself!'                            // 35
                      )                                                                                           // 35
                    )                                                                                             // 32
                  )                                                                                               // 32
                )                                                                                                 // 31
              ),                                                                                                  // 27
              React.createElement(                                                                                // 44
                'div',                                                                                            // 44
                { id: 'group7', className: 'parallax__group' },                                                   // 44
                React.createElement(                                                                              // 45
                  'div',                                                                                          // 45
                  { className: 'parallax__layer parallax__layer--fore' },                                         // 45
                  React.createElement('div', { className: 'title' })                                              // 46
                ),                                                                                                // 45
                React.createElement(                                                                              // 48
                  'div',                                                                                          // 48
                  { className: 'parallax__layer parallax__layer--base' },                                         // 48
                  React.createElement(                                                                            // 49
                    'div',                                                                                        // 49
                    { className: 'title' },                                                                       // 49
                    '  ',                                                                                         // 49
                    React.createElement(                                                                          // 49
                      'div',                                                                                      // 49
                      { className: 'card-panel col s12', id: 'about' },                                           // 49
                      React.createElement(                                                                        // 50
                        'h3',                                                                                     // 50
                        { className: 'center' },                                                                  // 50
                        React.createElement(                                                                      // 50
                          'p',                                                                                    // 50
                          { className: 'left' },                                                                  // 50
                          'Learn more about us.'                                                                  // 50
                        )                                                                                         // 50
                      ),                                                                                          // 50
                      React.createElement(                                                                        // 51
                        'p',                                                                                      // 51
                        { className: 'center' },                                                                  // 51
                        'Please learn more.'                                                                      // 51
                      ),                                                                                          // 51
                      React.createElement(                                                                        // 52
                        'p',                                                                                      // 52
                        { className: 'center' },                                                                  // 52
                        'Pls.'                                                                                    // 52
                      )                                                                                           // 52
                    )                                                                                             // 49
                  )                                                                                               // 49
                )                                                                                                 // 48
              )                                                                                                   // 44
            )                                                                                                     // 13
          )                                                                                                       // 12
        )                                                                                                         // 11
      );                                                                                                          // 9
    }                                                                                                             // 67
                                                                                                                  //
    return render;                                                                                                // 7
  }()                                                                                                             // 7
});                                                                                                               // 5
                                                                                                                  //
// Export the module back to the route                                                                            //
module.export("default",exports.default=(realHome));                                                              // 71
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./client/template.main.js");
require("./client/main.jsx");