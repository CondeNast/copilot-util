'use strict';

var util = require('util');

/**
 * A timeout capable error
 *
 * @constructor
 *
 * @param {String} [message]
 * @param {Number} [timeout]
 */
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
  var _url = '';

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
      var str = _message || 'Timeout of ' + this.timeout + 'ms reached';
      if (_url) {
        str = str + ' (' + _url + ')';
      }
      return str;
    }
  });

  Object.defineProperty(this, 'url', {
    get: function() {
      return _url;
    },
    set: function(url) {
      _url = url;
      return _url;
    }
  });
}

util.inherits($__TimeoutError, Error);

module.exports = $__TimeoutError;
