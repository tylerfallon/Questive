import React from 'react';
import {mount} from 'react-mounter'

import {main} from './main.jsx';
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

FlowRouter.route('/main', {
  action() {
    mount(MainLayout, {
      content : (<Test />)
    })
  }
});

FlowRouter.route('/login', {
  action() {
    mount(MainLayout, {
      content : (<Login />)
    })
  }
});

FlowRouter.route('/signUp', {
  action() {
    mount(MainLayout, {
      content : (<SignUp />)
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