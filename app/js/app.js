'use strict';

var React = require('react');
// import Reflux from 'reflux';
var Router = require('react-router');

// var AppStore = require('./stores/AppStore');
// var AppActions = require('./actions/AppActions');

// var AMR = require('amazeui-react');
// var AMR = require('./reactui');
// var Topbar = AMR.Topbar;
// var Nav = AMR.Nav;
// var CollapsibleNav = AMR.CollapsibleNav;
// var Container = AMR.Container;
// var Header = AMR.Header;

// var RouteLink = require('./components/RouteLink');
// var SiteFooter = require('./components/SiteFooter');




// // Pages
// var Index = require('./pages/Index');
// var Page1 = require('./pages/Page1');
// var About = require('./pages/About');
// var Login = require('./pages/Login');
// var List = require('./pages/List');
// var Company = require('./pages/Company');
// var NotFound = require('./pages/NotFound');

// var routes = (
//   <Route name="app" path="/" handler={App}>
//     <DefaultRoute handler={Index}/>
//     <Route name='page1' handler={Page1}/>
//     <Route name='about' handler={About}/>
//     <Route name='login' handler={Login}/>
//     <Route name='list' path="list" handler={List}/>
//     <Route name='detail' path="list/:id" handler={List}/>
//     <Route name="company" path="about/company" handler={Company}/>

//     <NotFoundRoute handler={NotFound} />
//   </Route>
// );

var routes = require('./routes');

/*
<Route path="/" handler={App}>
  // When the url is `/`, this route will be active.
  <DefaultRoute handler={Home}/>

  <Route name="about" handler={About}/>
  <Route name="users" handler={Users}>
    <Route name="user" handler={User} path="/user/:id"/>

    // when the url is `/users`, this will be active
    <DefaultRoute name="users-index" handler={UsersIndex}/>

  </Route>
</Route>
*/

document.addEventListener('DOMContentLoaded', function() {
  Router.run(routes,
    Router.HashLocation,
    function(Handler) {
      React.render(<Handler />, document.body);
    });
});
