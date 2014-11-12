'use strict';

var core = require('../../core');
var zlib = require('zlib');

/*eslint new-cap:0 */
var _COMPRESS_HEADERS = core.collection.Set(['gzip', 'deflate', 'identity']);

/**
 * Uncompress data based on its respective response headers
 *
 * @param {Response}
 * @param {Buffer}
 * @returns {Promise~Buffer}
 */
exports.unzip = function $__unzip(response, buffer) {
  return new core.Promise(function(resolve, reject) {
    if (response.headers['content-encoding'] === 'identity') {
      return resolve(buffer);
    }

    if (!_COMPRESS_HEADERS.has(response.headers['content-encoding'])) {
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
