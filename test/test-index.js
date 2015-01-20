'use strict';

var sdk = require('..');
var expect = require('chai').expect;

describe('SDK', function() {
  it('should export versions', function() {
    expect(sdk.versions).to.be.an('object');
  });
});
