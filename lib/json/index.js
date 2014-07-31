'use strict';

var core = require('../core');

exports.parse = function $__parse(data) {
  return new core.Promise(function(resolve, reject) {
    try {
      return resolve(JSON.parse(data));
    } catch(err) {
      return reject(err);
    }
  });
};
