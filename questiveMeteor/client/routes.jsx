import React from 'react';
import {mount} from 'react-mounter'
import {main} from './main.jsx';

var Main = require('../React/app/components/Main');
var Search = require('../React/app/components/Search'); 
var Saved = require('../React/app/components/Saved'); 
var Home = require('../React/app/components/Home')
var Profile = require('../React/app/components/Profile')
var Leaderboards = require('../React/app/components/Leaderboards')
var Join = require('../React/app/components/Join')
var Create = require('../React/app/components/Create')
var Index = require('../React/app/components/Index')

//by having default in App.jsx, whatever imports this file, you don't need to use curly brackets when importing it
// import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
// import About from './About.jsx';
// import ResolutionDetail from './resolutions/ResolutionDetail.jsx';


FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content : (<Main />)
    })
  }
});

FlowRouter.route('/leaderboards', {
  action() {
    mount(MainLayout, {
      content : (<Leaderboards />)
    })
  }
});

FlowRouter.route('/profile', {
  action() {
    mount(MainLayout, {
      content : (<Profile />)
    })
  }
});

// FlowRouter.route('/signUp', {
//   action() {
//     mount(MainLayout, {
//       content : (<SignUp />)
//     })
//   }
// });

// FlowRouter.route('/profile', {
//   action() {
//     mount(MainLayout, {
//       content : (<Profile />)
//     })
//   }
// });

// FlowRouter.route('/resolutions/:id', {
//   action(params) {
//     mount(MainLayout, {
//       content : (<ResolutionDetail id={params.id} />)
//     })
//   }
// });

// <Route path='/' component={Main}>

//     {/* If user selects Search or Saved show the appropriate component*/}
//     <Route path='Search' component={Search} />
//     <Route path='Saved' component={Saved} />
//     <Route path='Leaderboards' component={Leaderboards} />
//     <Route path='Profile' component={Profile} />
//     <Route path='Home' component={Home} />
//     <Route path='Join' component={Join} />
//     <Route path='Create' component={Create} />

//     {/*If user selects any other path... we get the Home Route*/}
//     <IndexRoute component={Profile} />

    

//   </Route>