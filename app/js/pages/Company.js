'use strict';

var React = require('react');
// var AMR = require('amazeui-react');
var AMR = require('../reactui');
var NavLink = require('../components/NavLink');
var AppActions = require('../actions/AppActions');

var pageInfo = {
  title: '公司'
};

var Company = React.createClass({
  componentDidMount: function() {
    AppActions.updateHeader(pageInfo);
  },
  render: function() {
    return (
      <div className="ask-page">
        <NavLink/>
        <AMR.Container className="am-padding-vertical-lg">
          <h2>公司</h2>
          <p>页面内容</p>
        </AMR.Container>
      </div>
    );
  }
});

module.exports = Company;
