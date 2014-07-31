'use strict';

module.exports = function $__onError(resolver) {
  return function(err) {
    return resolver.reject(err);
  };
};
