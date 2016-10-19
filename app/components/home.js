// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')



var Home = React.createClass({

	render: function(){



		return(
			/*We can only render a single div. So we need to group everything inside of this main-container one*/
		<div className="mainDiv">
			<div className="main-container"> 
        <div className="parallax">
          <div id="group2" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <center><h3 className="tagline">Discover. Connect. Adventure. <br /> <br />
              <center><a href="#/profile" type="button" id="getStarted" className="btn btn-danger center getStarted"><h4>Get Started</h4></a></center><br /></h3></center>         
               <br /><br /> <br />
             <center><a href="#"><img src={'https://s10.postimg.org/dfh868909/Questive_Logo.png'} height='100' width='250' className="logoArea"/></a></center>
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
              <div className="title">  <div className="card-panel" id="about">
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



			</div>
		</div>
		)
	}
});

// Export the module back to the route
module.exports = Home;