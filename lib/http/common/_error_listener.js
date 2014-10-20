'use strict';

var error = require('../../error');

module.exports = function $__onError(resolver, options) {
  return function(err) {
    var he = new error.HttpError(err.message);
    he.url = options.path;
    return resolver.reject(he);
  };
};
