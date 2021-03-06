'use strict';

var React = require('react');
// var AMR = require('amazeui-react');
var AMR = require('../reactui');
var NavLink = require('../components/NavLink');
var AppActions = require('../actions/AppActions');

var pageInfo = {
  title: '关于我们',
  pageId: '100000',
  header: {
    right: [
      {
        link: '#right-link',
        icon: 'bars',
        callback: function(nav, e) {
          e.preventDefault();
          console.log('点击了自定义侧边栏');
        }
      }
    ]
  }
};

var About = React.createClass({
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
        <AMR.Container className="am-padding-vertical-lg">
          <h2>关于我们</h2>
          <p>页面内容</p>
        </AMR.Container>
      </div>
    );
  }
});

module.exports = About;
