'use strict';

var request = require('..').http.request;

var options = {
  hostname: 'www.google.com',
  headers: {
    'content-type': 'text/html; charset=utf-8'
  }
};

request(options).done(function(buffer) {
  console.log(buffer.toString().length);
});

request('http://www.google.com').done(function(buffer) {
  console.log(buffer.toString().length);
});
