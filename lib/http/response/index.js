'use strict';

var core = require('../../core');
var error = require('../../error');
var onData = require('./_data_listener');
var onEnd = require('./_end_listener');
var onError = require('../common/_error_listener');

/**
 * Respond to HTTP/s data
 *
 * @param {Response}
 * @returns {Promise~Response}
 */
module.exports = function $__onResponse(response) {
  return new core.Promise(function(resolve, reject) {
    var resolver = { resolve: resolve, reject: reject };

    var data = { seq: core.collection.vector() };
    var statusCode = response.statusCode;

    if (statusCode >= 400) {
      return resolver.reject(new error.HttpError(statusCode));
    }

    response.on('error', onError(resolver))
            .on('data', onData(data))
            .on('end', onEnd(resolver, response, data));
  });
};
