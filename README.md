![Logo](https://github.com/condenast/copilot-util/raw/master/assets/loris.png)

# copilot-util

Condé Nast - Copilot JavaScript utilities

## Install

```shell
$ npm i copilot-util
```

# API

  * <a href="#http_request"><code><b>http.request()</b></code></a>
  * <a href="#http_response"><code><b>http.response()</b></code></a>
  * <a href="#error_http"><code><b>error.HttpError()</b></code></a>
  * <a href="#error_timeout"><code><b>error.TimeoutError()</b></code></a>
  * <a href="#json_parse"><code><b>json.parse()</b></code></a>

---
### HTTP

<a name="http_request"></a>
`http.request(options) => Promise → Response~Buffer`

<a name="http_response"></a>
`http.response(response) => Promise → Response~Buffer`

---
### Error

<a name="error_http"></a>
`error.HttpError(message, statusCode) => HttpError`

<a name="error_timeout"></a>
`error.TimeoutError(message, timeout) => TimeoutError`

---
### JSON

<a name="json_parse"></a>
`json.parse(data) => Promise → Object`

---

## Developer

### Lint/Tests

Linting is done through [eslint](http://eslint.org) with settings from `.eslintrc`. This happens automatically as part of the `pretest` script when running tests.

Tests are written with [mocha](https://npmjs.org/package/mocha) and can be run through the npm test script.

```shell
$ npm test
```
## License

MIT
