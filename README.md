# Dinero Message Verification and Signing for Bitcore-Dinero


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-dinero.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-dinero)
[![Build Status](https://img.shields.io/travis/dinerocoin/bitcore-message-dinero.svg?branch=master&style=flat-square)](https://travis-ci.org/dinerocoin/bitcore-message-dinero)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-message-dinero.svg?style=flat-square)](https://coveralls.io/r/dinerocoin/bitcore-message-dinero?branch=master)

bitcore-message-dinero adds support for verifying and signing dinero messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-dinero repo](https://github.com/dinerocoin/bitcore-dinero) for more information.

## Getting Started

```sh
npm install bitcore-message-dinero
```

```sh
bower install bitcore-message-dinero
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-dinero');
var Message = require('bitcore-message-dinero');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/dinerocoin/bitcore-dinero/blob/master/CONTRIBUTING.md) on the main bitcore-dinero repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

