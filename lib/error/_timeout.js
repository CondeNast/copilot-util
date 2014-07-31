'use strict';

var util = require('util');

function $__TimeoutError(message, timeout) {
  if (typeof message === 'number') {
    timeout = message;
    message = '';
  }

  Error.call(this);
  Error.captureStackTrace(this, $__TimeoutError);

  var _name = 'TimeoutError';
  var _message = message;
  var _timeout = timeout;

  Object.defineProperty(this, 'name', {
    get: function() {
      return _name;
    }
  });

  Object.defineProperty(this, 'timeout', {
    get: function() {
      return _timeout;
    }
  });

  Object.defineProperty(this, 'message', {
    get: function() {
      return _message || 'Timeout of ' + this.timeout + 'ms reached';
    }
  });
}

util.inherits($__TimeoutError, Error);

module.exports = $__TimeoutError;
