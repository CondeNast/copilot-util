# response (HTTP/s)

Provides a composable interface for handling HTTP or HTTPS responses

## API

  * <a href="#http_response"><code><b>http.response()</b></code></a>

### response

Handle HTTP/s request

- Automatically rejects error level HTTP statuses (&gt;=400)
- Automatically uncompresses `gzip`'d or `deflate`'d response data

<a name="http_response"></a>
`http.request(response) => Promise~Response → Buffer`
