'use strict';

var error = require('../../error');

module.exports = function $__onTimeout(resolver, timeout) {
  return function() {
      return resolver.reject(new error.TimeoutError(timeout));
  };
};
