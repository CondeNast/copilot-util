'use strict';

var url = require('url');
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
module.exports = function onResponse(res) {
  return new core.Promise(function responseExecutor(resolve, reject) {
    var context = { resolve: resolve, reject: reject };

    /*eslint new-cap:0 */
    var data = { seq: core.collection.List() };
    var statusCode = res.statusCode;

    if (statusCode >= 400) {
      res.destroy();
      var he = new error.HttpError(statusCode);
      he.url = res.req && url.format(res.req);
      return context.reject(he);
    }

    res.on('error', onError(context))
       .on('data', onData(data))
       .on('end', onEnd(context, res, data));
  });
};
