'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  updateHeader: function(obj) {
    AppDispatcher.dispatch({
      actionType: AppConstants.APP_HEADER,
      obj: obj
    });
  },
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: AppConstants.APP_CREATE,
      text: text
    });
  }
};

module.exports = AppActions;
