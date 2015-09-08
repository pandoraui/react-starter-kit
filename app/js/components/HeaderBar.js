'use strict';

var React = require('react');
var Router = require('react-router');

var AMR = require('../reactui');
var Header = AMR.Header;

var AppStore = require('../stores/AppStore');

//console.log(Router.HistoryLocation.getCurrentPath());

var HeaderBar = React.createClass({
  getInitialState: function() {
    return AppStore.getHeaderInfo();
  },
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },
  render: function() {
    if (!this.state.data) {
      return <div></div>;
    }
    return (
      <Header {...this.state} />
    );
  },
  _onChange: function() {
    this.setState(AppStore.getHeaderInfo());
  }
});

module.exports = HeaderBar;
