'use strict';

var parse = require('..').json.parse;
var request = require('..').http.request;

var options = {
  hostname: 'graph.facebook.com',
  secure: true,
  path: '/ping',
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'accept-encoding': 'zip, deflate, identity'
  },
};

request(options).then(parse).done(function(json) {
  console.log(json);
});

// note: this version will not send compression headers
request('https://graph.facebook.com/ping').then(parse).done(function(json) {
  console.log(json);
});
