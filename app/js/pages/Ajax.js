'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var AMR = require('../reactui');
var NavLink = require('../components/NavLink');

var AppActions = require('../actions/AppActions');

var Ajax = React.createClass({
  componentDidMount: function() {
    AppActions.updateHeader(pageInfo);
  },
  render: function() {
    return (
      <div className="ask-page">
        <div className="ask-banner">
          <AMR.Container>
            <h1>Ajax请求</h1>
            <h2>点此返回<a className="am-btn am-btn-link" href="#/">首页</a></h2>
          </AMR.Container>
        </div>
      </div>
    );
  }
});

module.exports = Ajax;
