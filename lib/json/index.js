'use strict';

var core = require('../core');

/**
 * Parse JSON from a string or buffer
 *
 * @param {String|Buffer} data
 * @returns {Promise~String}
 */
exports.parse = function parse(data) {
  return new core.Promise(function parseExecutor(resolve) {
    return resolve(JSON.parse(data));
  });
};
