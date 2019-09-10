'use strict';

var core = require('../../core');
var zlib = require('zlib');

/*eslint new-cap:0 */
var _COMPRESS_HEADERS = core.collection.Set(['deflate', 'identity']);

function errorOr(context) {
  return function errorOrBuffer(err, buf) {
    return err ? context.reject(err) : context.resolve(buf);
  };
}

/**
 * Uncompress data based on its respective response headers
 *
 * @param {Response}
 * @param {Buffer}
 * @returns {Promise~Buffer}
 */
exports.unzip = function unzip(res, buffer) {
  return new core.Promise(function unzipExecutor(resolve, reject) {
    if (res.headers['content-encoding'] === 'identity') {
      return resolve(buffer);
    }

    if (!_COMPRESS_HEADERS.has(res.headers['content-encoding'])) {
      return resolve(buffer);
    }

    zlib.unzip(buffer, errorOr({ resolve: resolve, reject: reject }));
  });
};
