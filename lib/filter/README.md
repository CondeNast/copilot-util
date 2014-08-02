# filter

Inspired by [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf), Filters compose with Responses to modify their behavior

`Filter: Response => Promise[Response]`

## Modules

  * <a href="#filter_identity"><code><b>filter.identity()</b></code></a>

---
### Identity

A filter that returns the identity or same value as the response

This module tends to be useful for testing and/or learning about filters

<a name="http_request"></a>
`filter.identity(response) => Promise → Response~Buffer`
