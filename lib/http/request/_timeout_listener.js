'use strict';

var error = require('../../error');

module.exports = function $__onTimeout(resolver, options, timeout) {
  return function() {
    var te = new error.TimeoutError(timeout);
    te.url = options.path;
    return resolver.reject(te);
  };
};
