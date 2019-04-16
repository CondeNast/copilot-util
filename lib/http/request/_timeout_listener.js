'use strict';

var error = require('../../error');
var url = require('url');

module.exports = function onTimeout(context, req, options) {
  return function rejectWithTimeoutError() {
    console.log('here oh my god');
    req.abort();
    var te = new error.TimeoutError(options.timeout);
    te.url = url.format(options);
    return context.reject(te);
  };
};

function onTimeout2(context, req, options) {
  return function rejectWithTimeoutError() {
    setImmediate(function() {
      if (context.requestCompleted) {
        return;
      }
      console.log('erro');
      req.abort();
      var te = new error.TimeoutError(options.timeout);
      te.url = url.format(options);
      return context.reject(te);
    });
  };
};
