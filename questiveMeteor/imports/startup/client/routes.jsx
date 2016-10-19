import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Create from '../../ui/create.js';
import Leaderboards from '../../ui/leaderboards.js';
import Main from '../../ui/Main.js';
import Profile from '../../ui/profile.js';
import Join from '../../ui/join.js';
import realHome from '../../ui/realHome.js'


// import { One } from '../../ui/pages/one.jsx';
// import { Two } from '../../ui/pages/two.jsx';

// import { NotFound } from '../../ui/pages/not-found.jsx';

const routes = (
    <Router history={ browserHistory }>
      	<Route path="/" component={Main}>
      		<IndexRoute component={realHome}/>
      		<Route path="Leaderboards" component={Leaderboards}/>
      		<Route path="Create" component={Create}/>
      		<Route path="Profile" component={Profile}/>
      		<Route path="Join" component={Join}/>
      	</Route>
    </Router>
    );

export default routes;