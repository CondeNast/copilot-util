# compress

This is an internal module for managing request data compression.

## API

### unzip

Uncompress response data based on its headers

#### HTTP

- http://en.wikipedia.org/wiki/HTTP\_compression

Supported `Content-Encoding` headers:
 - gzip
 - deflate
 - identity

```js
compress.unzip(response, buffer) => Promise → Response~Buffer
```
