'use strict';

var core = require('..').core;
var expect = require('chai').expect;

describe('Core', function() {
  describe('Interface', function() {
    it('should export a collection implementation', function() {
      expect(core.collection).to.be.a('object');
      expect(core.collection.List).to.be.a('function');
      expect(core.collection.Set).to.be.a('function');
    });

    describe('Bluebird Promises', function() {
      it('should export a promise implementation', function() {
        expect(core.Promise).to.be.a('function');
        expect(core.Promise.resolve).to.be.a('function');
      });

      it('should have bluebird specific method', function () {
        expect(core.Promise.props).to.be.a('function');
      });
    });

    describe('Native Promises', function() {
      before(function () {
        // Reload the library using native promises
        process.env.COPILOT_PROMISE_TYPE = 'native';

        // Delete the cached modules
        delete require.cache[require.resolve('..')];
        delete require.cache[require.resolve('../lib/core')];

        // Reload the module(s) using native Promises
        core = require('..').core;
      });

      after(function () {
        // Reload the library using default Bluebird promises
        delete process.env.COPILOT_PROMISE_TYPE;

        // Delete the cached modules
        delete require.cache[require.resolve('..')];
        delete require.cache[require.resolve('../lib/core')];

        // Reload the module(s) using Bluebird Promises
        core = require('..').core;
      });

      it('should export a promise implementation', function() {
        expect(core.Promise).to.be.a('function');
        expect(core.Promise.resolve).to.be.a('function');
      });

      it('should not have bluebird specific method', function () {
        expect(core.Promise.props).to.equal(undefined);
      });
    });
  });
});
