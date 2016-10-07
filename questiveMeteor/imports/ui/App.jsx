// remember to enter all components to get information 
import React, { Component, PropTypes } from 'react';
 
import { createContainer } from 'meteor/react-meteor-data';
// add the tasks java script 
import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';
 
// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};
// to get tasks from the DB
export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);