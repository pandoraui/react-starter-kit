'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var AppActions = require('../actions/AppActions');

var AMR = require('../reactui');
var NavLink = require('../components/NavLink');

var pageInfo = {
  title: '首页'
};

var Index = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    AppActions.updateHeader(pageInfo);
  },
  render: function() {
    return (
      <div className="ask-page">
        <NavLink/>
        <div className="ask-banner">
          <AMR.Container>
            <h1>Hello World!</h1>
            <h2>欢迎使用 Amaze UI React 入门套件。</h2>
          </AMR.Container>
        </div>
      </div>
    );
  }
});

module.exports = Index;
