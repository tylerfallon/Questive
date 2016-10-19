var React = require('react');
var Router = require('react-router');
var Main = require('./Main');

import { Button } from 'react-bootstrap';
import { hashHistory } from 'react-router';

var Profile = React.createClass({
  getInitialState: function () {
    return (
      {
        user: {
          username: '',
          email: ''
        }
      }
    );
  },  
  getUser: function() {
    $.ajax({
      type: "GET",
      dataType: 'json',
      url: '/user',
      error: function() {
        hashHistory.push('register');
      },
      success: function (jsonData) {
        console.log('user', jsonData);
        if (!jsonData) {
          hashHistory.push('register');
        } else {
          this.setState({
            user: jsonData
          });          
        }
      }.bind(this)
    });    
  },
  componentDidMount: function () {
    this.getUser();
  },    
	render: function(){
		return(
      <div className="mainDiv">
        <Main />
			<div className="main-container"> 
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <div className="profile-box well profile">
              <div className="col-sm-12">
                <div className="col-xs-12 col-sm-5">
                 <span className="headMain"><p className="strong text-center">{this.state.user.username}</p>
                  <img src="https://t4.ftcdn.net/jpg/01/18/03/35/160_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg" className="text-center img-circle imageScale" /></span>                  
                  </div>
                  <div className="col-xs-12 col-sm-7 text-center">
                  <figure className="justify">
                     <p><strong>About: </strong></p>
                      <p><strong>Hobbies: </strong> </p>
                      <p><strong>Contests Completed: </strong><span className="tags">AC Hunt</span></p>
                        
                        <p><strong>Email Address: </strong>{this.state.user.email}</p>
                            
                  </figure>
                </div>
              </div>            
              <div className="col-xs-12 divider text-center">
                <div className="col-xs-12 col-sm-6">
                  <h2><strong> 4 </strong></h2>                    
                  <p><small>Followers</small></p>
                  <button className="btn btn-success btn-block"><span className="fa fa-plus-circle" /> Follow </button>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <h2><strong>1</strong></h2>                    
                  <p><small>Contests Completed</small></p>
                  <div className="btn-group dropup btn-block">
                    <button type="button" className="btn btn-primary btn-block"><span className="fa fa-gear" /> Contact User </button>
                  </div>
                </div>
              </div>
            </div>                 
          </div>
        </div>
      </div>
    </div>
  </div>
		)
	}
});
module.exports = Profile;