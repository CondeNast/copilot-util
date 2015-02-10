'use strict';

var error = require('../../error');

module.exports = function onTimeout(context, req, options) {
  return function rejectWithTimeoutError() {
    req.abort();
    var te = new error.TimeoutError(options.timeout);
    te.url = options.path;
    return context.reject(te);
  };
};
