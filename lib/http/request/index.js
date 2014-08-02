'use strict';

var core = require('../../core');
var onResponse = require('./_response_listener');
var onTimeout = require('./_timeout_listener');
var url = require('url');

var _SOCKET_TIMEOUT = process.env.NODE_SOCKET_TIMEOUT || 15 * 1000;

/**
 * Request data over HTTP/s
 *
 * Supported option properties:
 * - http://nodejs.org/api/http.html#http_http_request_options_callback
 * - secure {Boolean}: enable secure communication over HTTPS, default: false
 * - timeout {Number}: request socket timeout in milliseconds, default: 15000
 * - data {Buffer|String}: data to write to the request, default: undefined
 *
 * @param {Object} options
 * @returns {Promise~Response}
 */
module.exports = function $__request(options) {
  options = typeof options === 'string' ? url.parse(options) : options || {};
  options.secure = (/https:/).test(options.protocol) ? true : options.secure;

  var http = options.secure ? require('https') : require('http');

  if (!options.agent) {
    options.agent = new http.Agent();
    options.agent.maxSockets = Infinity;
  }

  return new core.Promise(function(resolve, reject) {
    var resolver = { resolve: resolve, reject: reject };
    var timeout = options.timeout || _SOCKET_TIMEOUT;

    var request = http.request(options);
    request.setTimeout(timeout, onTimeout(resolver, timeout));

    request.on('response', onResponse(resolver)).end(options.data);
  });
};
