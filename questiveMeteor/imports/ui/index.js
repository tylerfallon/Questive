var React = require('react');
var Router = require('react-router');
var Query = require('./Search/Query');
var Results = require('./Search/Results');
var helpers = require('../utils/helpers');
import { Button } from 'react-bootstrap';

var Index = React.createClass({
	render: function(){
		return(
			<div className="main-container"> 
			<div>
        <div className="parallax">
          <div id="group2" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <center><h3 className="tagline">Discover. Connect. Adventure. <br /> <br />
              <center><button type="button" className="btn btn-danger center" onClick={this.handleSubmit}><h4>Get Started</h4></button></center><br /></h3></center>                

               <br /><br /> <br />
             <center><h1 className='center'>Welcome to Questive.</h1></center>
            </div>
            <a name="about" />
            <div className="parallax__layer parallax__layer--back black">
            </div>
          </div>
          
          <div id="group5" className="parallax__group">
            <div className="parallax__layer parallax__layer--fore">
              <div className="title"></div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">  <div className="card-panel col s12" id="about">
                    <h3 className="center"><p className='left whatIs'>What is Questive?</p></h3>
                    <p className="center whatIs">Questive is a social web and mobile application that allows you to explore the world around you.</p>
                    <p className="center whatIs">
                      Join contests created by other users or create one yourself!
                    </p>
                  </div>
              </div>
            </div>
          </div>
			

          <div id="group7" className="parallax__group">
            <div className="parallax__layer parallax__layer--fore">
              <div className="title"></div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">  <div className="card-panel col s12" id="about">
                    <h3 className="center"><p className='left'>Learn more about us.</p></h3>
                    <p className="center">Please learn more.</p>
                    <p className="center">
                      Pls.
                    </p>
                  </div>
              </div>
            </div>
          </div>

			</div>



			</div></div>
		)
	}
});
module.exports = Index;