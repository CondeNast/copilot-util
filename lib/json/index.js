'use strict';

var core = require('../core');

/**
 * Parse JSON from a string or buffer
 *
 * @param {String|Buffer} data
 * @returns {Promise~String}
 */
exports.parse = function $__parse(data) {
  return new core.Promise(function(resolve, reject) {
    try {
      return resolve(JSON.parse(data));
    } catch(err) {
      return reject(err);
    }
  });
};
