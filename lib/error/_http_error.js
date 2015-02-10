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
function HttpError(message, statusCode) {
  if (typeof message === 'number') {
    statusCode = message;
    message = '';
  }

  Error.call(this);
  Error.captureStackTrace(this, HttpError);

  var _name = 'HttpError';
  var _message = message;
  var _statusCode = statusCode;
  var _url = '';

  Object.defineProperties(this, {
    'name': {
      value: _name
    },
    'statusCode': {
      value: _statusCode
    },
    'message': {
      get: function() {
        var str = _message || http.STATUS_CODES[this.statusCode];
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

util.inherits(HttpError, Error);

module.exports = HttpError;
