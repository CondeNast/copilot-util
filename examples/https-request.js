'use strict';

var request = require('..').http.request;
var response = require('..').http.response;

var options = {
  hostname: 'www.google.com',
  secure: true,
  headers: {
    'content-type': 'text/html; charset=utf-8'
  }
};

request(options).then(response).done(function(buffer) {
  console.log(buffer.toString().length);
});

request('https://www.google.com').then(response).done(function(buffer) {
  console.log(buffer.toString().length);
});
