'use strict';

var expect = require('chai').expect;
var json = require('..').json;

describe('JSON', function() {
  var data = {
    name: '惣流・アスカ・ラングレー Sōryū Asuka Rangurē'
  };

  describe('parse', function() {
    it('should convert a JSON string into an object', function(done) {
      json.parse(JSON.stringify(data)).then(function(obj) {
        expect(obj).to.eql(data);

        done();
      });
    });

    it('should convert a buffer with JSON into an object', function(done) {
      json.parse(new Buffer(JSON.stringify(data))).then(function(obj) {
        expect(obj).to.eql(data);

        done();
      });
    });

    it('should convert a buffer with JSON into an object', function(done) {
      json.parse(new Buffer(JSON.stringify(data))).then(function(obj) {
        expect(obj).to.eql(data);

        done();
      });
    });

    it('should reject invalid JSON', function(done) {
      var token = '>';

      json.parse(JSON.stringify(data) + token).then(null, function(err) {
        expect(err).to.be.an.instanceof(SyntaxError);
        expect(err.message).to.contain(token);

        done();
      });
    });
  });
});
