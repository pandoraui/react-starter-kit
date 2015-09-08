'use strict';

var React = require('react');
// var AMR = require('amazeui-react');
var AMR = require('../reactui');
var NavLink = require('../components/NavLink');

var AppActions = require('../actions/AppActions');

var pageInfo = {
  title: '列表页'
};

var List = React.createClass({
  getInitialState: function() {
    return {
      id: this.props.params.id
    };
  },
  componentDidMount: function() {
    AppActions.updateHeader(pageInfo);
  },
  render: function() {
    return (
      <div className="ask-page">
        <NavLink/>
        <AMR.Container className="am-padding-vertical-lg">
          <h2>列表页面</h2>
          <p>列表ID：{this.state.id}</p>
        </AMR.Container>
      </div>
    );
  }
});

module.exports = List;
