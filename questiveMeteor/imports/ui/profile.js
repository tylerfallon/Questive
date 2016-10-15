var React = require('react');
var Router = require('react-router');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
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
                <div className="col-xs-12 col-sm-8">
                  <h2>Tyler Fallon</h2>
                  <p><strong>About: </strong> Full Stack Developer / UI Design / General Boss </p>
                  <p><strong>Hobbies: </strong> Making user profile pages </p>
                  <p><strong>Contests Completed: </strong>
                    <span className="tags">Random Hunt 2</span> 
                  </p>
                </div>             
                <div className="col-xs-12 col-sm-4 text-center">
                  <figure>
                    <img src="https://t4.ftcdn.net/jpg/01/18/03/35/160_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg" alt className="img-circle img-responsive img-prof" />
                  </figure>
                </div>
              </div>            
              <div className="col-xs-12 divider text-center">
                <div className="col-xs-12 col-sm-6 emphasis">
                  <h2><strong> 4 </strong></h2>                    
                  <p><small>Followers</small></p>
                  <button className="btn btn-success btn-block"><span className="fa fa-plus-circle" /> Follow </button>
                </div>
                <div className="col-xs-12 col-sm-6 emphasis">
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
export default Profile;