Unreleased

# [4.0.0](https://github.com/CondeNast/copilot-util/compare/v3.2.0...v4.0.0) (2020-04-13)

### BREAKING CHANGES

* Drop support for node earlier than version 10 ([#74], [#86])
* Remove immutable and exported `core` interface ([#85])
* Remove `core.collection` ([#85])
* Remove bluebird in favor of native `Promise` ([#83])
* Remove `core.Promise` ([#83])

### Fixes

* **deps:** Update dependency agentkeepalive to v4.1.0 ([#65], [#78])
* **deps:** Update dependency debug to v4.1.1 ([#50], [#63])

[#86]: https://github.com/CondeNast/copilot-util/pull/86
[#85]: https://github.com/CondeNast/copilot-util/pull/85
[#84]: https://github.com/CondeNast/copilot-util/pull/84
[#83]: https://github.com/CondeNast/copilot-util/pull/83
[#78]: https://github.com/CondeNast/copilot-util/pull/78
[#74]: https://github.com/CondeNast/copilot-util/pull/74
[#65]: https://github.com/CondeNast/copilot-util/pull/65
[#63]: https://github.com/CondeNast/copilot-util/pull/63
[#50]: https://github.com/CondeNast/copilot-util/pull/50

2018.10.16, Version 3.2.0 (Stable)
* project: update sinon to version ^5.1.0
* request: enable keepAlive by default

2018.04.12, Version 3.1.0 (Stable)

* Show the full URL in a timeout error (#10)
* project: use caret semver for devDependencies and allow Greenkeeper to test updates.
  This requires fewer package updates and time spent on maintenance.

2016.03.22, Version 3.0.0 (Stable)

* bluebird: Upgrade to 3.3.4
* immutable: Upgrade to 3.7.6


2015.06.27, Version 2.2.1 (Stable)

* request: Add debug support via `DEBUG=copilot-util:http-request`


2015.02.10, Version 2.2.0 (Stable)

* request: Abort request after timeout error (previous memory leak)

* project: Refactor function names and promise context structure

* bluebird: Upgrade to 2.9.7

* eslint: Upgrade to 0.14.1


2015.01.20, Version 2.1.0 (Stable)

* project: Expose dependency versions along w/ SDK

* bluebird: Upgrade to 2.8.1

* immutable: Upgrade to 3.6.2


2014.11.12, Version 2.0.0 (Stable)

* core: Move to facebook's immutable-js for collections

* request: Check for setTimeout on request object (browserify support)

* project: Change project main to lib/index.js

* bluebird: Upgrade to 2.3.11


2014.10.20, Version 1.4.0 (Stable)

* request/response: Append request path to HTTP errors

* error: Support an optional URL property on TimeoutError

* json: Remove redundant try-catch

* project: Expose SDK version


2014.09.04, Version 1.3.0 (Stable)

* request: Handle error event

* response: Close socket before error status aborts


2014.08.22, Version 1.2.0 (Stable)

* request: Allow max sockets to be configured via NODE_MAX_SOCKETS

* error: Support an optional URL property on HttpError

* project: Update nodeico badge to compact version


2014.08.02, Version 1.1.0 (Stable)

* core: Expose core.Promise and core.collection

* project: Add examples and module links


2014.08.02, Version 1.0.0 (Stable)

* project: Add module documentation and tests

* project: Lock dependencies


2014.07.31, Version 0.2.0 (Unstable)

* request: Decouple request from response module


2014.07.30, Version 0.1.0 (Unstable)

* project: Initial commit
