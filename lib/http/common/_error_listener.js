'use strict';

var error = require('../../error');

module.exports = function onError(context, req, options) {
  return function rejectWithHttpError(err) {
    var he = new error.HttpError(err.message);
    he.url = options.path;
    return context.reject(he);
  };
};
