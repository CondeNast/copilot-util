'use strict';

var core = require('../../core');
var compress = require('../../internal/compress');

var intoArray = core.collection.into_array;

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
    var unzip = compress.unzip(response, Buffer.concat(intoArray(data.seq)));
    return unzip.then(_fulfill(resolver), _reject(resolver));
  };
};
