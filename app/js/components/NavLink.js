'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var State = Router.State;
var Link = Router.Link;

var AMR = require('../reactui');

var NavLink = React.createClass({
  render: function() {
    return (
      <AMR.Container className="am-padding-vertical-lg ask-nav">
          <h2>测试链接</h2>
          <a className="am-btn am-btn-link" href="#/">首页</a>
          <a className="am-btn am-btn-link" href="#/page1">页面1</a>
          <a className="am-btn am-btn-link" href="#/about">关于</a>
          <a className="am-btn am-btn-link" href="#/login">登录</a>
          <a className="am-btn am-btn-link" href="#/list">列表</a>
          <a className="am-btn am-btn-link" href="#/list/34">列表项</a>
          <a className="am-btn am-btn-link" href="#/about/company">公司</a>
          <a className="am-btn am-btn-link" href="#/action">活动页</a>
      </AMR.Container>
    );
  }
});

module.exports = NavLink;
