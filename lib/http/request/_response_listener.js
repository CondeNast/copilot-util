'use strict';

module.exports = function onResponse(context) {
  return function resolveWithResponse(res) {
    context.requestCompleted = true;
    return context.resolve(res);
  };
};
