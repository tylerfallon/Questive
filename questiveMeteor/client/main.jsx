import React, { Component } from "react";
import ReactDOM from 'react-dom';
import App from '../imports/ui/App';
Meteor.startup(() => {
	ReactDOM.render(<App />,document.getElementById("app"));
});