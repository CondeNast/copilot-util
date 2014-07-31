'use strict';

module.exports = function $__onResponse(resolver) {
  return function(response) {
    return resolver.resolve(response);
  };
};
