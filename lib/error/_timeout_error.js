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
function TimeoutError(message, timeout) {
  if (typeof message === 'number') {
    timeout = message;
    message = '';
  }

  Error.call(this);
  Error.captureStackTrace(this, TimeoutError);

  var _name = 'TimeoutError';
  var _message = message;
  var _timeout = timeout;
  var _url = '';

  Object.defineProperties(this, {
    'name': {
      value: _name
    },
    'timeout': {
      value: _timeout
    },
    'message': {
      get: function() {
        var str = _message || 'Timeout of ' + this.timeout + 'ms reached';
        if (_url) {
          str = str + ' (' + _url + ')';
        }
        return str;
      }
    },
    'url': {
      get: function() {
        return _url;
      },
      set: function(url) {
        _url = url;
        return _url;
      }
    }
  });
}

util.inherits(TimeoutError, Error);

module.exports = TimeoutError;
