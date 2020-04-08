'use strict';

var expect = require('chai').expect;
var response = require('..').http.response;
var stream = require('stream');
var zlib = require('zlib');

describe('HTTP', function() {
  describe('Response', function() {
    var str = '碇 シンジ Ikari Shinji';

    it('should transmit response data', function(done) {
      var rs = new stream.Readable();
      rs._read = function() {
        this.push(Buffer.from(str));
        this.push(null);
      };
      rs.method = 'GET';
      rs.statusCode = 200;
      rs.headers = {};
      rs.destroy = function() { /* close socket */ };

      response(rs).then(function(data) {
        expect(data.toString()).to.eql(str);

        done();
      });
    });

    it('should automatically handle compressed data', function(done) {
      var rs = new stream.Readable();
      rs._read = function() {
        this.push(Buffer.from(str));
        this.push(null);
      };

      var zrs = rs.pipe(zlib.createGzip());
      rs.method = 'GET';
      zrs.statusCode = 200;
      zrs.headers = {
        'content-encoding': 'gzip'
      };

      response(zrs).then(function(data) {
        expect(data.toString()).to.eql(str);

        done();
      });
    });

    it('should reject error HTTP statuses', function(done) {
      var rs = new stream.Readable();
      rs._read = function() {
        this.push(Buffer.from(str));
        this.push(null);
      };
      rs.method = 'GET';
      rs.statusCode = 400;
      rs.headers = {};
      rs.destroy = function() { /* close socket */ };

      response(rs).then(null, function(err) {
        expect(err.message).to.eql('Bad Request');

        done();
      });
    });

    it('should add the URL to a >400 response error', function(done) {
      var res = {
        statusCode: 404,
        req: {
          getHeader: function() {
            return 'www.foo.com';
          },
          path: '/bar'
        },
        destroy: function() { /* close socket */ }
      };

      response(res).catch(function(error) {
        expect(error.message).to.eql('Not Found (www.foo.com/bar)');
        done();
      });
    })
  });
});
