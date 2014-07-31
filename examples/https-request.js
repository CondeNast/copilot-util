'use strict';

var request = require('..').http.request;

var options = {
  hostname: 'www.google.com',
  secure: true,
  headers: {
    'content-type': 'text/html; charset=utf-8'
  }
};

request(options).done(function(buffer) {
  console.log(buffer.toString().length);
});

request('https://www.google.com').done(function(buffer) {
  console.log(buffer.toString().length);
});
