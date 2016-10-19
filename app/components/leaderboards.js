var React = require('react');
var Router = require('react-router');
var Main = require('./Main');

import { Button } from 'react-bootstrap';


var Leaderboards = React.createClass({
  getInitialState: function () {
    return (
      {
        searchResults: []
      }
    );
  },
  showResults: function (response) {
    console.log("Showing");
    this.setState({
      searchResults: response
    });
  },
  search: function (URL) {
    console.log("searching");
    $.ajax({
      type: "GET",
      dataType: 'json',
      url: URL,
      success: function (jsonData) {
        console.log('jsonData', jsonData);
        this.showResults(jsonData)
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.search("/leaderboard");
  },
  render: function () {
    return (
      <div className="container">
        {/* <SearchBox search = {this.search}/>*/}
        <Results searchResults = {this.state.searchResults}/>
      </div>
    );
  }
});

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
      <div className="mainDiv">
        <Main />
        <div className='leaderboard'>
        <label>Sort By:</label>
        <select ref="category">
          <option value="alltime">All</option>
          <option value="recent">Recent</option>
        </select>
         <Button bsSize="xsmall" input type="submit" onClick = {this.createAjax}>Sort</Button>
        </div>
      </div>
    );
  }
});

var Results = React.createClass({
  render: function () {
    var resultItems = this.props.searchResults.map(function (result, index) {
      return (
        <ResultItem key={index} reactKey={index} username={result.username} points={result.points} totalMiles={result.totalMiles} imageUrl={result.img}/>
      );
    })
    return (
      <table className="leaderboard table table-striped">
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Username</th>
            <th>Points</th>
            <th>Total Miles</th>
          </tr>
        </thead>
        <tbody>
          {resultItems}
        </tbody>
      </table>
    )
  }
});

var ResultItem = React.createClass({
  render: function () {
    var imageStyle = {
      width: '50px',
      height: '50px'
    }
    return (
      <tr>
        <td>{this.props.reactKey +1}</td>
        <td><img src={this.props.imageUrl} style={imageStyle}></img> {this.props.username}</td>
        <td>{this.props.points}</td>
        <td>{this.props.totalMiles}</td>
      </tr>
    );
  }
});


module.exports = Leaderboards;