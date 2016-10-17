var React = require('react');
var Router = require('react-router');
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
      dataType: 'jsonp',
      url: URL,
      success: function (jsonData) {
        this.showResults(jsonData)
      }.bind(this)
    });
  },
  componentDidMount: function () {
    this.search("userlinkhere");
  },
  render: function () {
    return (
      <div>
        <SearchBox search = {this.search}/>
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
      <div>
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
        <ResultItem key={index} reactKey={index} username={result.username} alltime={result.alltime} recent={result.recent} imageUrl={result.img}/>
      );
    })
    return (
      <table className="leaderboard table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Points</th>
            <th>Something else</th>
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
        <td>{this.props.reactKey}</td>
        <td><img src={this.props.imageUrl} style={imageStyle}></img> {this.props.username}</td>
        <td>{this.props.recent}</td>
        <td>{this.props.alltime}</td>
      </tr>
    );
  }
});


module.exports = Leaderboards;