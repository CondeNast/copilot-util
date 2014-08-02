'use strict';

var error = require('..').error;
var expect = require('chai').expect;

describe('HttpError', function() {
  var str = 'We don\'t have a pilot!';

  it('should construct from a message and statusCode', function() {
    var he = new error.HttpError(str, 404);

    expect(he).to.be.an('object');
    expect(he).to.be.an.instanceof(Error);
    expect(he).to.be.an.instanceof(error.HttpError);
    expect(he.message).to.equal(str);
    expect(he.statusCode).to.equal(404);
    expect(he.stack).to.be.a('string');
  });

  it('should construct from a message without statusCode', function() {
    var he = new error.HttpError(str);

    expect(he).to.be.an('object');
    expect(he).to.be.an.instanceof(Error);
    expect(he).to.be.an.instanceof(error.HttpError);
    expect(he.message).to.equal(str);
    expect(he.statusCode).to.equal(undefined);
    expect(he.stack).to.be.a('string');
  });

  it('should construct from a statusCode without message', function() {
    var he = new error.HttpError(500);

    expect(he).to.be.an('object');
    expect(he).to.be.an.instanceof(Error);
    expect(he).to.be.an.instanceof(error.HttpError);
    expect(he.message).to.equal('Internal Server Error');
    expect(he.statusCode).to.equal(500);
    expect(he.stack).to.be.a('string');
  });
});
