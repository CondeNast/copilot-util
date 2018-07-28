'use strict';

var core = require('../../core');
var debug = require('debug')('copilot-util:http-request');
var onError = require('../common/_error_listener');
var onResponse = require('./_response_listener');
var onTimeout = require('./_timeout_listener');
var timingCallbacks = require('./_request_timing');
var url = require('url');

var _ENV = process.env;
var _MAX_SOCKETS = parseInt(_ENV.NODE_MAX_SOCKETS, 10) || Infinity;
var _SOCKET_TIMEOUT = parseInt(_ENV.NODE_SOCKET_TIMEOUT, 10) || 15 * 1000;

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
module.exports = function request(options) {
  options = typeof options === 'string' ? url.parse(options) : options || {};
  options.secure = (/https:/).test(options.protocol) ? true : options.secure;

  var http = options.secure ? require('https') : require('http');

  if (!options.agent) {
    options.agent = new http.Agent();
    options.agent.maxSockets = _MAX_SOCKETS;
  }

  var protocol = 'http' + (options.secure ? 's' : '') + '://';
  debug('http request: %s', protocol + options.hostname + options.path);

  return new core.Promise(function requestExecutor(resolve, reject) {
    var context = { resolve: resolve, reject: reject };
    options.timeout = options.timeout || _SOCKET_TIMEOUT;

    // create tags for statsD calls
    var tags = [ options.hostname ];
    timingCallbacks.start(tags);
    var req = http.request(options, timingCallbacks.createResponseCallback(tags));
    req.on('socket', timingCallbacks.createSocketCallback(tags));

    // browserify via http-browserify does not currently support timeouts
    // https://github.com/substack/http-browserify/issues/49
    if (typeof req.setTimeout === 'function') {
      req.setTimeout(options.timeout, onTimeout(context, req, options));
    }

    req.on('error', onError(context, req, options));
    req.on('response', onResponse(context)).end(options.data);
  });
};
