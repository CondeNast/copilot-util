'use strict';

var pkg = require('../package');

exports.versions = {
  'copilot-util': pkg.version,
  'bluebird': pkg.dependencies.bluebird,
  'immutable': pkg.dependencies.immutable
};

exports.core = require('./core');
exports.error = require('./error');
exports.filter = require('./filter');
exports.http = require('./http');
exports.json = require('./json');
