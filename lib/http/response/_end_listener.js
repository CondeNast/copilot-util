'use strict';

var compress = require('../../internal/compress');

function _fulfill(resolver) {
  return function(buffer) {
    resolver.resolve(buffer);
  };
}

function _reject(resolver) {
  return function(err) {
    resolver.reject(err);
  };
}

module.exports = function $__onEnd(resolver, response, data) {
  return function() {
    var unzip = compress.unzip(response, Buffer.concat(data.seq.toArray()));
    return unzip.then(_fulfill(resolver), _reject(resolver));
  };
};
