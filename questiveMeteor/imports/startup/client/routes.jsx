import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/app.jsx';
import { Index } from '../../ui/index.jsx';

// import { One } from '../../ui/pages/one.jsx';
// import { Two } from '../../ui/pages/two.jsx';

// import { NotFound } from '../../ui/pages/not-found.jsx';

const routes = (
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
       <IndexRoute component={ Index } />
      </Route>
   
    </Router>
    );

export default routes;