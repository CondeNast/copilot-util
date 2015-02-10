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
});
