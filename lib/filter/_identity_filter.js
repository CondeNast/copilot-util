'use strict';

var core = require('../core');

module.exports = function $__identity(response) {
  return core.Promise.resolve(response);
};
