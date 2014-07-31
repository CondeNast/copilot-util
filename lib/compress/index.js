'use strict';

var core = require('../core');
var zlib = require('zlib');

var hasKey = core.collection.has_key;

var _COMPRESS_HEADERS = core.collection.set(['zip', 'deflate', 'identity']);

exports.unzip = function $__unzip(response, buffer) {
  return new core.Promise(function(resolve, reject) {
    if (!hasKey(_COMPRESS_HEADERS, response.headers['content-encoding'])) {
      return resolve(buffer);
    }

    zlib.unzip(buffer, function(err, buf) {
      if (err) {
        return reject(err);
      }
      return resolve(buf);
    });
  });
};
