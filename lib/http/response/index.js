'use strict';

var core = require('../../core');
var error = require('../../error');
var onData = require('./_data');
var onEnd = require('./_end');
var onError = require('./_error');

module.exports = function $__onResponse(resolver) {
  return function(response) {
    var data = { seq: core.collection.vector() };
    var statusCode = response.statusCode;

    if (statusCode >= 400) {
      return resolver.reject(new error.HttpError(statusCode));
    }

    response.on('error', onError(resolver))
            .on('data', onData(data))
            .on('end', onEnd(resolver, response, data));
  };
};
