'use strict';

var error = require('../../error');
var url = require('url');

module.exports = function onError(context, req, options) {
  return function rejectWithHttpError(err) {
    var he = new error.HttpError(err.message);
    he.url = url.format(options);
    return context.reject(he);
  };
};
