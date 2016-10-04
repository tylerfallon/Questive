import React from 'react';
import ReactDOM from 'react-dom';
import './sass/base.scss';

var Main = require('./components/Main.js');
var Routes = require('./config/routes.js');
var exampleJSX = (
	<div>
	<Main />
	</div>
);

ReactDOM.render(Routes, document.getElementById('app'));