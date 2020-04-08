'use strict';

var compress = require('../../internal/compress');

function fulfill(context) {
  return function resolveWithBuffer(buffer) {
    context.resolve(buffer);
  };
}

function reject(context) {
  return function rejectWithError(err) {
    context.reject(err);
  };
}

module.exports = function onEnd(context, res, data) {
  return function resolveData() {
    var unzip = compress.unzip(res, Buffer.concat(data.seq));
    return unzip.then(fulfill(context), reject(context));
  };
};
