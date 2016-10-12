import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
//Get meteor from all the correct informaiton from user 
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
// inport the database information fro tasks api
import { Tasks } from '../api/tasks.js';
// import tasks ux.  just like react components 
import Task from './Task.jsx';
// import LeaderBoard from './Children/Leaderboard.jsx';
// get the Blaze account informaiton 
import AccountsUIWrapper from './UIWrapper.jsx';
// import routes from "../routes/routes.jsx";



// var bgColors = { "Default": "#e3f2fd",
//                     "Blue": "#00B1E1",
//                     "Cyan": "#37BC9B",
//                     "Green": "#8CC152",
//                     "Red": "#E9573F",
//                     "Yellow": "#F6BB42",
// };

// export const MainLayout = ({content}) => (
class Main extends Component {

	render(){

			/*We can only render a single div. So we need to group everything inside of this main-container one*/
			<div className="main-layout">
				<header>
					<h1> Questive</h1>
					<nav>
						 <a href="/">Home</a>
	        	 <a href="/leaderboard">Leaderboard</a>
					</nav>
				</header>
				</div>
			}
		}
	
	

	// 				{/*Navbar*/}
	// 				<nav className="navbar navbar-dark bg-info">
	// 					<div className="container-fluid">
	// 						<div className="navbar-header">
	// 							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
	// 								<span className="sr-only">Toggle navigation</span>
	// 								<span className="icon-bar"></span>
	// 								<span className="icon-bar"></span>
	// 								<span className="icon-bar"></span>
	// 							</button>
	// 						</div>
					
	// 						<div className="collapse navbar-collapse navbar-ex1-collapse">
											
	// 								<ul className="nav navbar-nav navbar-left">
	// 								<li><img src={'https://s-media-cache-ak0.pinimg.com/originals/e2/5c/43/e25c43c6a65bdca84c72f0c58524fcd6.png'} height='50' width='50'/></li>
	// 								<li><a href="#/index">Home</a></li>
	// 								</ul>
					



						
									

							

	// 								<ul className="nav navbar-nav navbar-right">
	// 								<li><img src={'http://blog.roblox.com/wp-content/uploads/2014/04/Points-Icon-700px.png'} height='50' width='50'/></li>
	// 								<li><a href="#/Create">Create</a></li>
	// 								</ul>

	// <ul className="nav navbar-nav navbar-right">
	// 								<li><img src={'http://www.engage2excel.com/wp-content/uploads/2015/09/Contests-icon.png'} height='50' width='50'/></li>
	// 								<li><a href="#/join">Join</a></li>
	// 								</ul>

	// 						<ul className="nav navbar-nav navbar-right">
	// 								<li><img src={'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png'} height='50' width='50'/></li>
	// 								<li><a href="#/leaderboard">Leaderboards</a></li>
	// 							</ul>

	// 		<ul className="nav navbar-nav navbar-right navbar-for-responsiveness">
	// 								<li><img src={'https://openclipart.org/download/247319/abstract-user-flat-3.svg'} height='50' width='50'/></li>
	// 								<li><a href="#/profile">Profile</a></li>
	// 								</ul>
	// 						</div>
	// 					</div>
	// 				</nav>







	// 				{/*Here we will load the sub components (Search or Saved */}
	// 				{/*These sub-components are getting passed as this.props.children*/}
	// 				{/*this.props.children*/}

		
	// 			</div>



	// 		</div>
// 		)
// 	}
// }

		
// Export the module back to the route
// module.exports = Main;