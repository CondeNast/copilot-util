'use strict';

var times = {};
var start = function() {};
var createResponseCallback = function() {};
var createSocketCallback = function() {};
var _ENV = process.env;

var dogStatsDHost = _ENV.CN_DATADOG_HOST || '127.0.0.1';
var dogStatsDPort = _ENV.CN_DATADOG_PORT || 8120;

if (_ENV.HTTP_REQUEST_TIMING) {

  var DogStatsD = require('hot-shots');
  var statsClient = new DogStatsD({
    host: dogStatsDHost,
    port: dogStatsDPort,
    maxBufferSize: 512
  });

  /**
   * Take a time reading with a specific name, as a delta
   * from another mark. The second argment is an array of mark names,
   * so you can specify the time taken to 'firstByte' as as delta
   * from 'tlsHandshake' for HTTPS connections, or from 'tcpConnection'
   * for HTTP connections.
   *
   * @param {string} name name of the mark to record
   * @param {array} deltaFrom a list of mark names to use as origin
   * @param {Array} tags array of tag strings
   * @returns {undefined} undefined
   */
  function timing(name, deltaFrom, tags) {
    if (!deltaFrom) deltaFrom = [];
    deltaFrom.push('start');

    return function() {
      // save this time (absolute)
      times[name] = process.hrtime();

      if (name !== 'start') {
        // find the first deltaFrom which is set
        var timeDelta = deltaFrom.reduce(function(result, timeMarkName) {
          if (!result && times[timeMarkName]) {
            return timeMarkName;
          }
          return result;
        }, null);

        var delta = process.hrtime(times[timeDelta]);
        var ms = Math.round(delta[0] * 1000 + delta[1] / 1000000, 2);
        record(name, ms, tags)
      }
    }
  };

  function record(label, value, tags) {
    console.log(label, value, tags);
    // statsClient.timing(label, value, tags);
  }

  /**
   * Starts a timing set; call this when the request is made.
   *
   * @param {Array} tags array of tag strings
   * @returns {undefined} undefined
   */
  start = function(tags) {
    timing('start', null, tags)();
  };

  /**
   * Creates a response callback bound to specific option set
   *
   * @param {Array} tags array of tag strings
   * @returns {undefined} undefined
   */
  createResponseCallback = function (tags) {
    /**
     * Sets up timing marks on a response; use as a callback for
     * `http.request`.
     *
     * @param {Object} res instance of http.ServerResponse
     * @returns {undefined} undefined
     */
    return function (res) {
      res.once('readable', timing('firstByte', ['tlsHandshake', 'tcpConnection'], tags));
      res.on('end', timing('end', ['firstByte', 'tcpConnection'], tags));
    }
  };

  /**
   * Creates a socket callback bound to specific option set
   *
   * @param {Array} tags array of tag strings
   * @returns {undefined} undefined
   */
  createSocketCallback = function (tags) {
    /**
     * Sets up timing marks on a socket; used as a callback for the
     * request.socket event.
     *
     * @param {Object} socket instance of net.Socket
     * @returns {undefined} undefined
     */
    return function(socket) {
      socket.on('lookup', timing('dnsLookup', null, tags));
      socket.on('connect', timing('tcpConnection', ['dnsLookup'], tags));
      socket.on('secureConnect', timing('tlsHandshake', ['tcpConnection'], tags))
    };
  };
}

exports.start = start;
exports.createResponseCallback = createResponseCallback;
exports.createSocketCallback = createSocketCallback;
