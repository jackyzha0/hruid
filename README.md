# hruid

Human-readable Base16 IDs. Address space of Address space of `1010*2876*9999 = 29,044,695,240` which is larger than `2^32`.

WIP: Supporting up to 32-byte keys

## Usage
```js
const {fromKey, toKey} = require('hruid')

// converting base16 key to hruid
console.log(fromKey("a70e67e1"))
$ 'such-patch-9169'

console.log(toKey("such-patch-9169"))
$ "a70e67e1"
```