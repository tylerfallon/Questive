import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

//Get meteor from all the correct informaiton from user 
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';


class Leaderboard extends Component{
  render(){
    return(
      <h1> work</h1>
      )
  }
}

  


var SearchBox = React.createClass({
  createAjax: function () {
    var category = ReactDOM.findDOMNode(this.refs.category).value;
    if(category == "alltime") {
      var URL = "userlinkhere";
    } else {
      var URL = "userlinkhere";
    }
    this.props.search(URL);
  },
  render: function () {
    return (
      <div>
        <label>Sort By:</label>
        <select ref="category">
          <option value="alltime">All</option>
          <option value="recent">Recent</option>
        </select>
         <Button bsSize="xsmall" input type="submit" onClick = {this.createAjax}>Sort</Button>

      </div>
    );
  }
});

// //  getInitialState: function () {
//     return (
//       {
//         searchResults: []
//       }
//     );
//   },
//   showResults: function (response) {
//     console.log("Showing");
//     this.setState({
//       searchResults: response
//     });
//   },
//   search: function (URL) {
//     console.log("searching");
//     $.ajax({
//       type: "GET",
//       dataType: 'jsonp',
//       url: URL,
//       success: function (jsonData) {
//         this.showResults(jsonData)
//       }.bind(this)
//     });
//   },
//   componentDidMount: function () {
//     this.search("userlinkhere");
//   },
//   render: function () {
//     return (
//       <div>
//         <SearchBox search = {this.search}/>
//         <Results searchResults = {this.state.searchResults}/>
//       </div>
//     );
//   }
// };d

module.exports = Leaderboard;