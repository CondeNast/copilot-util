'use strict';

var http = require('http');
var https = require('https');
var expect = require('chai').expect;
var request = require('..').http.request;
var sinon = require('sinon');

describe('HTTP', function() {
  var buf = new Buffer('渚 カヲル Nagisa Kaoru');

  var setTimeoutSpy = sinon.spy();
  var endSpy = sinon.spy();

  var requestStub = function(options) {
    return function() {
      options = options || {};
      return {
        setTimeout: setTimeoutSpy,
        on: function(event, listener) {
          if (options.error && event === 'error') {
            listener.call(null, new Error('boom'));
          }
          if (event === 'response') {
            listener.call(null, buf);
          }
          return {
            end: endSpy
          };
        }
      };
    };
  };

  afterEach(function() {
    setTimeoutSpy.reset();
    endSpy.reset();
  });

  describe('Request (HTTP)', function() {
    it('should respond with the data mocked into the listener', function(done) {
      var stub = sinon.stub(http, 'request', requestStub());
      var url = 'http://www.condenast.com';

      request(url).done(function(data) {
        var args = stub.args[0][0];
        expect(args.protocol).to.eql('http:');
        expect(args.href).to.eql(url + '/');
        expect(args.agent.maxSockets).to.eql(Infinity);

        expect(setTimeoutSpy.calledOnce).to.eql(true);
        expect(setTimeoutSpy.calledWith(15000)).to.eql(true);
        expect(endSpy.calledOnce).to.eql(true);

        expect(data.toString()).to.eql(buf.toString());

        stub.restore();
        done();
      });
    });
  });

  describe('Secure Request (HTTPS)', function() {
    it('should respond with the data mocked into the listener', function(done) {
      var stub = sinon.stub(https, 'request', requestStub());
      var url = 'https://www.condenast.com';

      request(url).done(function(data) {
        var args = stub.args[0][0];
        expect(args.protocol).to.eql('https:');
        expect(args.href).to.eql(url + '/');
        expect(args.agent.maxSockets).to.eql(Infinity);

        expect(setTimeoutSpy.calledOnce).to.eql(true);
        expect(setTimeoutSpy.calledWith(15000)).to.eql(true);
        expect(endSpy.calledOnce).to.eql(true);

        expect(data.toString()).to.eql(buf.toString());

        stub.restore();
        done();
      });
    });
  });

  describe('Request (HTTP) HttpError', function() {
    it('should respond with the data mocked into the listener', function(done) {
      var stub = sinon.stub(http, 'request', requestStub({ error: true }));
      var url = 'http://www.condenast.com';

      request(url).done(null, function(err) {
        var args = stub.args[0][0];
        expect(args.protocol).to.eql('http:');
        expect(args.href).to.eql(url + '/');
        expect(args.agent.maxSockets).to.eql(Infinity);

        expect(setTimeoutSpy.calledOnce).to.eql(true);
        expect(setTimeoutSpy.calledWith(15000)).to.eql(true);
        expect(endSpy.calledOnce).to.eql(true);

        expect(err.message).to.contain('boom');

        stub.restore();
        done();
      });
    });
  });
});
