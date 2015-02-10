'use strict';

var core = require('../core');

/**
 * A filter that returns the identity or same value as the response
 *
 * @param {Response}
 * @returns {Promise~Response}
 */
module.exports = function identity(res) {
  return core.Promise.resolve(res);
};
