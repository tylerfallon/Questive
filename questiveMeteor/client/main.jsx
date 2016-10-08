import React, { Component } from "react";
import ReactDOM from 'react-dom';

//start startup files
import '../imports/startup/accounts-config.js';

import App from '../imports/ui/App';
Meteor.startup(() => {
	ReactDOM.render(<App />,document.getElementById("app"));
});