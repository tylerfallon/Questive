var React = require('react');
var Router = require('react-router');
var Nav = require('./nav.js');
// var Main = require('./Main.js');

import { Button } from 'react-bootstrap';
import { hashHistory } from 'react-router';


var Register = React.createClass({
  onLogin: function (e) {
    console.log("onLogin");
    e.preventDefault();
    $.ajax({
      type: "POST",
      dataType: 'json',
      url: '/login',
      data: {
        username: $('#usernameLogin').val(),
        password: $('#passwordLogin').val()
      },
      success: function (jsonData) {
        debugger;
        hashHistory.push('profile');
      }.bind(this)
    });
  },
  onRegister: function (e) {
    console.log("onRegister");
    e.preventDefault();
    $.ajax({
      type: "POST",
      dataType: 'json',
      data: {
        username: $('#usernameRegister').val(),
        password: $('#passwordRegister').val(),
        email: $('#emailRegister').val()
      },      
      url: '/register',
      success: function (jsonData) {
        debugger;
        hashHistory.push('profile');        
      }.bind(this)
    });
  },    
	render: function(){
		return(
      <div className="mainDiv">
        <Nav />
      <div className="container">
        <form className="form-signin" onSubmit={this.onLogin}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="username" className="sr-only">Username</label>
          <input type="text" id="usernameLogin" name="username" className="form-control" placeholder="Username" required autofocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="passwordLogin" name="password" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    
      <form className="form-signin" onSubmit={this.onRegister}>
          <h2 className="form-signin-heading">Register</h2>
          <label htmlFor="username" className="sr-only">Username</label>
          <input type="username" id="usernameRegister" name="username" className="form-control" placeholder="Username" required autofocus />
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="emailRegister" name="email"  className="form-control" placeholder="Email address" required autofocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="passwordRegister" name="password" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register   </button>
      </form>
    </div>
  </div>
    );
  }
});
module.exports = Register;