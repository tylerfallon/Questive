var React = require('react');
var Router = require('react-router');
import { Button } from 'react-bootstrap';

var Profile = React.createClass({
	render: function(){
		return(
			<div className="main-container"> 
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <div className="well profile">
              <div className="col-sm-12">
                <div className="col-xs-12 col-sm-5">
                 <span className="headMain"><p className="strong text-center">Tyler Fallon</p>
                  <img src="https://t4.ftcdn.net/jpg/01/18/03/35/160_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg" className="text-center img-circle imageScale" /></span>                  
                  </div>
                  <div className="col-xs-12 col-sm-7 text-center">
                  <figure className="justify">
                     <p><strong>About: </strong> Full Stack Developer / UI Designer / General Boss </p>
                      <p><strong>Hobbies: </strong> Blackjack UI/UX </p>
                      <p><strong>Contests Completed:</strong></p>
                        <span className="tags">AC Hunt</span>      
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
		)
	}
});
module.exports = Profile;