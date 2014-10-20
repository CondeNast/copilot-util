'use strict';

var error = require('..').error;
var expect = require('chai').expect;

describe('TimeoutError', function() {
  var timeout = 5000;
  var str = 'Shinji we don’t have much time!';

  it('should construct from a message and timeout', function() {
    var te = new error.TimeoutError(str, timeout);

    expect(te).to.be.an('object');
    expect(te).to.be.an.instanceof(Error);
    expect(te).to.be.an.instanceof(error.TimeoutError);
    expect(te.message).to.equal(str);
    expect(te.timeout).to.equal(timeout);
    expect(te.stack).to.be.a('string');
  });

  it('should construct from a message without timeout', function() {
    var te = new error.TimeoutError(str);

    expect(te).to.be.an('object');
    expect(te).to.be.an.instanceof(Error);
    expect(te).to.be.an.instanceof(error.TimeoutError);
    expect(te.message).to.equal(str);
    expect(te.timeout).to.equal(undefined);
    expect(te.stack).to.be.a('string');
  });

  it('should construct from a timeout without message', function() {
    var te = new error.TimeoutError(timeout);

    expect(te).to.be.an('object');
    expect(te).to.be.an.instanceof(Error);
    expect(te).to.be.an.instanceof(error.TimeoutError);
    expect(te.message).to.contain(timeout);
    expect(te.timeout).to.equal(timeout);
    expect(te.stack).to.be.a('string');
  });

  it('should allow assignment of a URL', function() {
    var he = new error.HttpError(500);

    var str = 'http://condenast.com';
    he.url = str;

    expect(he).to.be.an('object');
    expect(he).to.be.an.instanceof(Error);
    expect(he).to.be.an.instanceof(error.HttpError);
    expect(he.message).to.contain('Internal Server Error');
    expect(he.message).to.contain(str);
    expect(he.statusCode).to.equal(500);
    expect(he.url).to.equal(str);
    expect(he.stack).to.be.a('string');
  });
});
