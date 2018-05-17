'use strict';

var times = {};
var start = function() {};
var responseCallback = function() {};
var onSocketCallback = function() {};

if (process.env.HTTP_REQUEST_TIMING) {

  /**
   * Take a time reading with a specific name, as a delta
   * from another mark. The second argment is an array of mark names,
   * so you can specify the time taken to 'firstByte' as as delta
   * from 'tlsHandshake' for HTTPS connections, or from 'tcpConnection'
   * for HTTP connections.
   *
   * @param {string} name name of the mark to record
   * @param {array} deltaFrom a list of mark names to use as origin
   * @returns {undefined} undefined
   */
  function timing(name, deltaFrom) {
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
        console.log(timeDelta, '->', name, ms + 'ms');
      }
    }
  };

  /**
   * Starts a timing set; call this when the request is made.
   *
   * @returns {undefined} undefined
   */
  start = function() {
    timing('start')();
  };

  /**
   * Sets up timing marks on a response; use as a callback for
   * `http.request`.
   *
   * @param {Object} res instance of http.ServerResponse
   * @returns {undefined} undefined
   */
  responseCallback = function (res) {
    res.once('readable', timing('firstByte', ['tlsHandshake', 'tcpConnection']));
    res.on('end', timing('end', ['firstByte', 'tcpConnection']));
  };

  /**
   * Sets up timing marks on a socket; used as a callback for the
   * request.socket event.
   *
   * @param {Object} socket instance of net.Socket
   * @returns {undefined} undefined
   */
  onSocketCallback = function(socket) {
    socket.on('lookup', timing('dnsLookup'));
    socket.on('connect', timing('tcpConnection', ['dnsLookup']));
    socket.on('secureConnect', timing('tlsHandshake', ['tcpConnection']))
  };
}

exports.start = start;
exports.response = responseCallback;
exports.onSocket = onSocketCallback;
