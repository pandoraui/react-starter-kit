'use strict';

global.uiRequire = function (src) {
  if (src) {
    return require('../../../src/' + src);
  } else {
    return require('../../../src/AMUIReact');
  }
};

module.exports = require('../../../src/AMUIReact');
