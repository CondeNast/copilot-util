'use strict';

var error = require('../../error');
var url = require('url');

module.exports = function onTimeout(context, req, options) {
  return function rejectWithTimeoutError() {
    req.abort();
    var te = new error.TimeoutError(options.timeout);
    te.url = url.format(options);
    return context.reject(te);
  };
};
