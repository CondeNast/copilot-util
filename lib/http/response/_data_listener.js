'use strict';

module.exports = function $__onData(data) {
  return function(chunk) {
    data.seq = data.seq.push(chunk);
  };
};
