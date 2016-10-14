import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.jsx';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
