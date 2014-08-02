'use strict';

var expect = require('chai').expect;
var filter = require('..').filter;

describe('Identity Filter', function() {
  var response = {
    _maxListeners: 10,
    socket: {
      _connecting: false,
      _handle: {
        fd: 15,
        writeQueueSize: 0
      }
    },
    method: 'GET'
  };

  it('should return the same response it received', function(done) {
    filter.identity(response).done(function(res) {
      expect(res).to.eql(response);

      done();
    });
  });
});
