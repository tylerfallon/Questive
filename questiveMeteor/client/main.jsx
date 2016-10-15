import React, { Component } from "react";

import ReactDOM from 'react-dom';

//start startup files
import '../imports/startup/accounts-config.js';

import App from '../imports/ui/App.jsx';
import Main from '../imports/ui/Main.js';
import routes from '../imports/startup/client/routes';


Meteor.startup(() => {
	ReactDOM.render(Main, document.getElementById("app"));
});
