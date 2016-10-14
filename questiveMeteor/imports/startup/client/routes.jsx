import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Create from '../../ui/create.js';
import Leaderboards from '../../ui/leaderboards.js';
import Main from '../../ui/Main.js';


// import { One } from '../../ui/pages/one.jsx';
// import { Two } from '../../ui/pages/two.jsx';

// import { NotFound } from '../../ui/pages/not-found.jsx';

const routes = (
    <Router history={ browserHistory }>
      	<Route path="/" component={Main}>
      		<Route path="Leaderboards" component={Leaderboards}/>
      		<Route path="Create" component={Create}/>
      	</Route>
    </Router>
    );

export default routes;