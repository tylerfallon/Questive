var React = require('react');
var Router = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
<div className="row">
      <nav className="bg-info navbar-dark theNavBar">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header placeHold">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/#"><img src={'https://s12.postimg.org/t0v1v6l1p/Questive_Newer.png'} height='50' width='150' className="logoArea"/></a>

          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="placeHold collapse navbar-collapse" id="bs-example-navbar-collapse-1">
           
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
          {/*this.props.children*/}
      
    </div>
    )
  }
});

module.exports = Nav;