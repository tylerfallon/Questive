import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
//Get meteor from all the correct informaiton from user 
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
// inport the database information fro tasks api
import { Tasks } from '../api/tasks.js';
// import tasks ux.  just like react components 
import Task from './Task.jsx';
  import Main from './Main.jsx';

import LeaderBoard from'./Children/Leaderboard.jsx';
// get the Blaze account informaiton 
import AccountsUIWrapper from './UIWrapper.jsx';

// App component - represents the whole app
class App extends Component {
  
  render() {
    return(
      <div className="container">
        <h1> Hello World</h1>
        <AccountsUIWrapper />
        <div>
          <a href ="#"> Home</a>
          <a href ="#"> Leaderboards</a>
          <a href = "#"> New Hunt</a>
          <a href = "#"> Available hunts</a>

        </div>

        <LeaderBoard />
      </div>
   )
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  //Subscribe to tasks 
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, App);