# compress

This is an internal module for managing request/response data compression.

## API

  * <a href="#http_unzip"><code><b>internal.compress.unzip()</b></code></a>

### unzip

Uncompress response data based on its headers

#### HTTP

- [wikipedia: HTTP compression](http://en.wikipedia.org/wiki/HTTP_compression)

Supported `Content-Encoding` headers:
 - gzip
 - deflate
 - identity

<a name="http_unzip"></a>
`compress.unzip(response, buffer) => Promise → Response~Buffer`
