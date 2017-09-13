![Logo](assets/loris.png)

# copilot-util

[![Greenkeeper badge](https://badges.greenkeeper.io/CondeNast/copilot-util.svg)](https://greenkeeper.io/)

Condé Nast - copilot JavaScript utilities

[ ![Codeship Status for CondeNast/copilot-util](https://www.codeship.io/projects/a276efc0-4349-0132-7175-3af0e78f4535/status)](https://www.codeship.io/projects/44639)
[![Code Climate](https://codeclimate.com/github/CondeNast/copilot-util/badges/gpa.svg)](https://codeclimate.com/github/CondeNast/copilot-util)

## Install

[![NPM](https://nodei.co/npm/copilot-util.png?compact=true)](https://nodei.co/npm/copilot-util/)

## Examples

Usage examples can be found in [/examples](examples)

```shell
npm run-script examples
```

# API

  * <a href="#http_request"><code><b>http.request()</b></code></a>
  * <a href="#http_response"><code><b>http.response()</b></code></a>
  * <a href="#error_http"><code><b>error.HttpError()</b></code></a>
  * <a href="#error_timeout"><code><b>error.TimeoutError()</b></code></a>
  * <a href="#json_parse"><code><b>json.parse()</b></code></a>
  * <a href="#core_promise"><code><b>core.Promise()</b></code></a>
  * <a href="#core_collection"><code><b>core.collection()</b></code></a>

---
### HTTP

<a name="http_request"></a>
`http.request(options) => Promise~Response → Buffer` <code>([module](lib/http/request))</code>

<a name="http_response"></a>
`http.response(response) => Promise~Response → Buffer` <code>([module](lib/http/response))</code>

---
### Error

<a name="error_http"></a>
`error.HttpError(message, statusCode) => HttpError` <code>([module](lib/error))</code>

<a name="error_timeout"></a>
`error.TimeoutError(message, timeout) => TimeoutError` <code>([module](lib/error))</code>

---
### JSON

<a name="json_parse"></a>
`json.parse(data) => Promise → Object` <code>([module](lib/json))</code>

---
### Core

<a name="core_promise"></a>
see: [bluebird API](https://github.com/petkaantonov/bluebird/blob/master/API.md) <code>([module](lib/core))</code>

<a name="core_collection"></a>
see: [immutable API](http://facebook.github.io/immutable-js) <code>([module](lib/core))</code>

___

## Developer

### Lint/Tests

Linting is done through [eslint](http://eslint.org) with settings from `.eslintrc`. This happens automatically as part of the `pretest` script when running tests.

Tests are written with [mocha](https://npmjs.org/package/mocha) and can be run through the npm test script.

```shell
$ npm test
```
## License

MIT
