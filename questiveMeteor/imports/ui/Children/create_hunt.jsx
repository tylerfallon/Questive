import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
//Get meteor from all the correct informaiton from user 
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
// inport the database information fro tasks api
import { Tasks } from '../../api/tasks.js';
import { Scavenger_Hunts } from '../../api/scavenger_hunts.js';
// import tasks ux.  just like react components 
import Task from './Task.jsx';
// get the Blaze account informaiton 

// App component - represents the whole app
class createBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideForm: false,
      title: "Franks Title",

    };
  }
  handleTitleSubmit(event){
    event.preventDefault();
    // let title = ReactDOM.findDOMNode(this.refs.title).trim();
    // console.log(title);
    this.setState({
      title:this._title.value
    });
    const title_obj = {
      title:this._title.value,
      user:Meteor.user()
    };
    console.log(title_obj);

    Meteor.call('scavenger_hunts.insert',title_obj);

    this._title.value = "";
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const object_task = {
      user: Meteor.user(),
      title: this.state.title,
      text : ReactDOM.findDOMNode(this.refs.textInput).value.trim(),
      location: ReactDOM.findDOMNode(this.refs.location_text).value.trim()
    };
    console.log(object_task);

   Meteor.call('tasks.insert', object_task);


    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    ReactDOM.findDOMNode(this.refs.location_text).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
      return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;
 
      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }
  renderTitle(){
    if(this.props.currentUser){
      return(
      <form className='new-title' onSubmit ={this.handleTitleSubmit.bind(this)} >
                <input
                  type='text'
                  ref ={(title) => {
                    this._title = title;
                  }}
                  placeholder={this.state.title}
                  checked={this.state.hideCompleted}
                />
                <input
                  type='submit'
                  value ='submit'
                />
        </form> 
        )
    }else{
      return null
    } 
  }
  renderInputBox(){
    if(this.props.currentUser){ 
    return(     
      <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks"
              />
               <input
                  type="text"
                  ref="location_text"
                  placeholder="Enter a location"
                />  
                <input 
                  type="submit"
                  value = "submit"
                  />          
      </form>
      )}else {
      return null
    }
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Create a New Game</h1>
{/*
          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>
          */}

          {this.renderTitle()}
        {/* We can conditionaly display this but right now I dont know how */}
          {this.renderInputBox()} 
            
          </header>

        <ul>
          {this.renderTasks()}
         
        </ul>
      </div>
    );
  }
}

console.log(Tasks.find().fetch());
createBoard.propTypes = {
  tasks: PropTypes.array.isRequired,
  scavenger_hunts: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  //Subscribe to tasks 
  Meteor.subscribe('tasks');
  Meteor.subscribe('scavenger_hunts');

  return {
    scavenger_hunts:Scavenger_Hunts.find({}).fetch(),
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, createBoard);