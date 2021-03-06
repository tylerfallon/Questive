var React = require('react');
var Router = require('react-router');
var ReactDOM = require('react-dom');
var Main = require('./Main');

import { Button } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { FieldGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Radio } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Well } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { ListGroup} from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Pager } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import  SubTasks from './create_Subfolder/subTasks';

// add helper
var helpers = require('./utils/helpers.js');
//Create class 
var Create = React.createClass({
  getInitialState:function(){
    return{
      item: 1,
      title: "Default Title",
      titleDescription:"Enter a description for your contest",
      tasksArray:[] 
    }
  },
  handleRequest:function(){

    var item = {
      title: this.state.title,
      task: ReactDOM.findDOMNode(this.refs.taskText).value.trim(),
      location: ReactDOM.findDOMNode(this.refs.addressText).value.trim(),
      additionalInfo: ReactDOM.findDOMNode(this.refs.descriptionText).value.trim()
    };
     helpers.postSavedTasks(item)
        .then(function(data){
         console.log(data);
       }.bind(this));

   // update state 
    var holder = this.state.tasksArray;
    holder.push(item);
  
    // update state 
    this.setState({
      tasksArray: holder
    });
    console.log("updated holder")
    console.log(this.state.tasksArray);
    // reset input fiilds to nothing
    ReactDOM.findDOMNode(this.refs.taskText).value = "";
    ReactDOM.findDOMNode(this.refs.addressText).value = "";
    ReactDOM.findDOMNode(this.refs.descriptionText).value = "";

  },

 //Add new 
  Add: function() {
    //
    this.setState({
      item: this.state.item + 1
    }) 
    console.log(this.state.item);
    var oClone = document.getElementById("template").cloneNode(true);
    oClone.id = this.state.item;
    document.getElementById("placeholder").appendChild(oClone);
  },
  handleTitleChange: function () {
    var tempTitle = ReactDOM.findDOMNode(this.refs.titleText).value.trim();
    var tempDescription = ReactDOM.findDOMNode(this.refs.titleDescriptionText).value.trim();
   
    this.setState({
      title: tempTitle,
      titleDescription: tempDescription
    })
  },
  renderTasks:function(){
   console.log(true);
   console.log(this.state.tasksArray.length);
   var array = this.state.tasksArray;
   var place;
   // Ask how to display the information 
  },
  // submit the click to 
  handleSubmitClick:function(){
    console.log(this.state.tasksArray);
    // helpers.postSavedTasks
    helpers.postSavedTasks(this.state.tasksArray)
      .then(function(data){
        console.log(data);
      }.bind(this))
  },


  render: function(){
    return(
      <div class="mainDiv">
        <Main />
      <div class="add">
        <div className="main-container"> 
          <div className="container">
            <center><PageHeader>Create A Contest</PageHeader></center>
            <div></div>
            <form onChange = {this.handleTitleChange}>
              <ControlLabel>Contest Name</ControlLabel>
              <FormControl type="text" ref = "titleText" placeholder={this.state.title}></FormControl>
              <br />
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Contest Description</ControlLabel>
                <FormControl 
                  componentClass="textarea" 
                  ref = "titleDescriptionText"
                  placeholder={this.state.titleDescription}/>
              </FormGroup>
              <br />
            <FormGroup>
              <ControlLabel>Add the instructions for your contest below! Click to Expand.</ControlLabel>
            </FormGroup>
            </form>


            <div id="placeholder">
              <div id = 'template'>
                <Panel collapsible defaultExpanded={true} header='Task' >
                  <form className = "new task" onSubmit={this.handleRequest} >
                    <ListGroup fill>
                      <ListGroupItem>
                        <FormControl
                          type = "text"
                          ref = "taskText"
                          placeholder="Default Action"
                        />
                      </ListGroupItem>
                      <ListGroupItem>
                        <FormControl
                          type = "text"
                          ref = "addressText"
                          placeholder="Default Address"
                        />
                      </ListGroupItem>
                      <ListGroupItem>
                        <FormControl
                          type = 'text'
                          ref ="descriptionText"
                          placeholder = "Default Description"
                        />
                      </ListGroupItem>
                      <ListGroupItem>
                        <FormControl
                        type = "submit"
                        value = 'Submit'
                        />
                      </ListGroupItem>
                    </ListGroup>
                  </form>
                </Panel>
               </div>

{/*
                 <ListGroup fill>
                  <ListGroupItem>Action:  <FormControl type="text" placeholder="Enter text"></FormControl>
                   </ListGroupItem>
                  <ListGroupItem>Location:  <FormControl type="text" placeholder="Enter text"></FormControl> 
                </ListGroupItem>
                <ListGroupItem>Additional Info: <FormControl type="text" placeholder="Enter text"></FormControl></ListGroupItem>
                </ListGroup> 
              */}
          
            </div>{/* placeholder */}

            <SubTasks tasks = {this.state.tasksArray}/>


          {/**/}
            


            <br />

            <div className="well">
               <a href ="#/join"><Button bsSize="large" block >Submit Contest</Button></a>
              </div>
            
          </div>
        </div>
      </div>
    </div>
    );
    }



});
module.exports = Create;