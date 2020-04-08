'use strict';

var pkg = require('../package');

exports.versions = {
  'copilot-util': pkg.version
};

exports.error = require('./error');
exports.filter = require('./filter');
exports.http = require('./http');
exports.json = require('./json');
