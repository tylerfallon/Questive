import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/index.jsx';

import { Create } from '../../ui/Children/create_hunt.jsx';
import { Leaderboard } from '../../ui/Children/Leaderboard.jsx';
import { Task } from '../../ui/Children/Task.jsx';

// import { One } from '../../ui/pages/one.jsx';
// import { Two } from '../../ui/pages/two.jsx';

// import { NotFound } from '../../ui/pages/not-found.jsx';

const routes = (
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
       <IndexRoute component={ Index } />

        <Route path="/create" component={ Create } />
        <Route path="/leaderboard" component={ Leaderboard } />
        <Route path="/task" component={ Task } />


      </Route>
   
    </Router>



    );

export default routes;