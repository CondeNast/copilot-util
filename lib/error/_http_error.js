'use strict';

var http = require('http');
var util = require('util');

/**
 * An HTTP status code capable error
 *
 * @constructor
 *
 * @param {String} [message]
 * @param {Number} [statusCode]
 */
function $__HttpError(message, statusCode) {
  if (typeof message === 'number') {
    statusCode = message;
    message = '';
  }

  Error.call(this);
  Error.captureStackTrace(this, $__HttpError);

  var _name = 'HttpError';
  var _message = message;
  var _statusCode = statusCode;

  Object.defineProperty(this, 'name', {
    get: function() {
      return _name;
    }
  });

  Object.defineProperty(this, 'statusCode', {
    get: function() {
      return _statusCode;
    }
  });

  Object.defineProperty(this, 'message', {
    get: function() {
      return _message || http.STATUS_CODES[this.statusCode];
    }
  });
}

util.inherits($__HttpError, Error);

module.exports = $__HttpError;
