'use strict';

var core = require('../../core');

module.exports = function $__onData(data) {
  return function(chunk) {
    data.seq = core.collection.conj(data.seq, chunk);
  };
};
