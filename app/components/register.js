var React = require('react');
var Router = require('react-router');
var Nav = require('./nav.js');
// var Main = require('./Main.js');

import { Button } from 'react-bootstrap';
import { hashHistory } from 'react-router';
import { PageHeader } from 'react-bootstrap';
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
        hashHistory.push('profile');        
      }.bind(this)
    });
  },    
  render: function(){
    return(
      <div className="mainDiv">
        <Nav />
          <div>
          <center><h2>Welcome! Please login or register.</h2></center><br/>
        {/* Button trigger modal */}
        <center><button id='logButton' type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          Existing User: Login
        </button></center>
        {/* Modal */}
        <div className="modal fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel"></h4>
              </div>
              <div className="modal-body">
                
<form className="form-signin" onSubmit={this.onLogin}>
          <center><h3 className="form-signin-heading">Please sign in</h3>
          <label htmlFor="username" className="sr-only">Username</label>
          <input type="text" id="usernameLogin" name="username" className="form-control" placeholder="Username" required autofocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="passwordLogin" name="password" className="form-control" placeholder="Password" required />
          <button className="btn btn-md btn-primary btn-block" id='signInButton' type="submit" >Sign in</button></center>
        </form>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div>
        {/* Button trigger modal */}
        <center><button id='logButton' type="button" className="btn btn-danger btn-lg" data-toggle="modal" data-target="#myModal2">
          New User: Register
        </button></center>
        {/* Modal */}
        <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title" id="myModalLabel2"></h4>
              </div>
              <div className="modal-body">
                

      <form className="form-signin" onSubmit={this.onRegister}>
          <center><h3 className="form-signin-heading">Register</h3>
          <label htmlFor="username" className="sr-only">Username</label>
          <input type="username" id="usernameRegister" name="username" className="form-control" placeholder="Username" required autofocus />
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="emailRegister" name="email"  className="form-control" placeholder="Email address" required autofocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="passwordRegister" name="password" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" id='registerButton' type="submit">Register   </button></center>
      </form>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    );
  }
});
module.exports = Register;