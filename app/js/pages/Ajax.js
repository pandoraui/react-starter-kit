'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

var AMR = require('../reactui');
var NavLink = require('../components/NavLink');

var AppActions = require('../actions/AppActions');

var $Ajax = require('../utils/Ajax');
// var $ = require('npm-zepto');

var pageInfo = {
  title: 'Ajax请求'
};

var UserGist = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    this.setState({
      loading: true
    });
    //$Ajax.get(this.props.source, function(result) {
    $Ajax.get(this.props.source, 
      function(result) {
        var lastGist = result[0];
        if (this.isMounted()) {
          this.setState({
            loading: false,
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
          });
        }
      }.bind(this)
    );
  },

//-webkit-animation: fa-spin 2s infinite linear;
//  animation: fa-spin 2s infinite linear;

  render: function() {
    var renderHtml;
    if (this.state.loading) {
      renderHtml = (<div className="am-center"><i className="am-icon-spinner am-icon-spin"></i></div>);
    } else {
      renderHtml = (
        <div>
          {this.state.username}'s last gist is
          <a href={this.state.lastGistUrl}>here</a>.
        </div>
      );
    }
    return renderHtml;
  }
});

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
            <p>Ajax 效果如下</p>
            <UserGist source="https://api.github.com/users/octocat/gists" />
          </AMR.Container>
        </div>
      </div>
    );
  }
});

module.exports = Ajax;
