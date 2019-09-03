'use strict';

var USE_NATIVE_PROMISES = process.env.COPILOT_PROMISE_TYPE === 'native';

/**
 * Core dependencies
 */
exports.Promise = USE_NATIVE_PROMISES
 ? Promise
 : require('bluebird');
exports.collection = require('immutable');
