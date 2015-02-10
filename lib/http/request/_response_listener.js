'use strict';

module.exports = function onResponse(context) {
  return function resolveWithResponse(res) {
    return context.resolve(res);
  };
};
