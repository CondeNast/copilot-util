'use strict';

module.exports = function onData(data) {
  return function appendChunk(chunk) {
    data.seq = data.seq.concat(chunk);
  };
};
