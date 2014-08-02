# request (HTTP/s)

Inspired by [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf), request provides a composable interface for requesting data over HTTP/s

`Request: Request => Promise[Response]`

## API

  * <a href="#http_request"><code><b>http.request()</b></code></a>

### request

Transmit data over HTTP or HTTPS

Options supports the [standard node request options](http://nodejs.org/api/http.html#http_http_request_options_callback) as well as the additional:
  - secure {Boolean}: enable secure communication over HTTPS, default: false
  - timeout {Number}: request socket timeout in milliseconds, default: 15000
  - data {Buffer|String}: data to write to the request, default: undefined

<a name="http_request"></a>
`http.request(options) => Promise~Response → Buffer`
