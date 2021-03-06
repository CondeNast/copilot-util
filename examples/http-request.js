'use strict';

var request = require('..').http.request;
var response = require('..').http.response;

var options = {
  hostname: 'www.google.com',
  headers: {
    'content-type': 'text/html; charset=utf-8'
  }
};

request(options).then(response).then(function(buffer) {
  console.log(buffer.toString().length);
});

request('http://www.google.com').then(response).then(function(buffer) {
  console.log(buffer.toString().length);
});
