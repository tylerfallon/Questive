import React, { Component } from "react";
import ReactDOM from 'react-dom';

Meteor.startup(() => {
	ReactDOM.render(<div>HelloWorld! </div>,document.getElementById("app"));
});