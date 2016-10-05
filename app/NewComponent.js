
import React, {Component} from 'react';

//export default is bassically module.exports
//we name our class and say it extends React.Component,
//meaning it'll get all of the build in methods every react Component has
//A class is basically a fancy ES6 version of a constructor function

export default class NewComponent extends React.Component {
  //every Class in ES6 has a constructor function
  //A constructor function is where we set any initial values
  constructor(props){
    //if we pass in any values when we initilialize our instance of our
    //component, we call props so we can reference them
    super(props);
    //In order to use the 'this' keyword inside a class that extends
    //another class ie our components which inherit from React.Component
    this.state = {
      name: "Christian"
    };
    //in our constructor, our state is set directly. This is the only time that happens.
    this.handleButtonClick = this.handleButtonClick.bind(this);
    //our custom methods are not automatically bound to the 'this'
    //context of our component. Built in methods are.
    //We can bind custom methods to this like so ^
  }
  render(){
    return (
      <div>
        <h1>I am a new Component</h1>
        <button onClick={this.handleButtonClick}>ClickMe</button>
      </div>
    );
  }
  //notice how our functions are defined. no commas. This isnt
  //an object
  handleButtonClick(){
    //because used .bind(this) on handleButtonClick, we can refer to this.state
    console.log(this.state.name);
  }
}

module.exports = React.createClass({
  getInitialState: function(){
    return {
      name: "Christian"
    }
  },
  render: function(){
    return (
      <div>
        <h1>I am a new Component</h1>
        <button onClick={this.handleButtonClick}>ClickMe</button>
      </div>
    );
  },
  handleButtonClick: function(){
    console.log(this.state.name);
  }
})
