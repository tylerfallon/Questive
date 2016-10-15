// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')

var bgColors = { "Default": "#e3f2fd",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

var Main = React.createClass({

	render: function(){

		return(
			/*We can only render a single div. So we need to group everything inside of this main-container one*/
		<div className="row">
				<div className="container">
					{/*Navbar*/}
					<nav className="navbar navbar-dark bg-info">
						<div className="container-fluid">

							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a href='/profile'><img src={'https://s10.postimg.org/dfh868909/Questive_Logo.png'} height='50' width='150' className="logoArea"/></a>
							</div>
					
							<div className="collapse navbar-collapse navbar-ex1-collapse">
											
									<ul className="nav navbar-nav navbar-right">
									<li><img src={'http://blog.roblox.com/wp-content/uploads/2014/04/Points-Icon-700px.png'} height='48' width='48'/></li>
									<li><a href="/Create">Create</a></li>
									</ul>

	<ul className="nav navbar-nav navbar-right">
									<li><img src={'http://www.engage2excel.com/wp-content/uploads/2015/09/Contests-icon.png'} height='48' width='48'/></li>
									<li><a href="/join">Join</a></li>
									</ul>

							<ul className="nav navbar-nav navbar-right">
									<li><img src={'http://www.freeiconspng.com/uploads/leaderboard-icon-3.png'} height='48' width='48'/></li>
									<li><a href="/Leaderboards">Leaderboards</a></li>
								</ul>

			<ul className="nav navbar-nav navbar-right navbar-for-responsiveness">
									<li><img src={'https://openclipart.org/download/247319/abstract-user-flat-3.svg'} height='48' width='48'/></li>
									<li><a href="/profile">Profile</a></li>
									</ul>
							</div>
						</div>
					</nav>




					{this.props.children}

				
						<div className="main-container"> 
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
		</div>
		)
	}
});

// Export the module back to the route
export default Main;