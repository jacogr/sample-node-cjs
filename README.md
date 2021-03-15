# sample-node-cjs

Sample with CJS sources. There is no `"type": "..."` specifier in `package.json`, so it defaults to CJS.

Tested with -

```
$ node --version
v14.15.1
```

Default operation (require syntax) -

```
$ node ./index.js
0xe3a05f9b2094017b56c618ac5862a8ac1cc00409602e4fdc4b7bd477ecc8ca01
```

And to execute the ESM version, overriding default `type` specifier in `package.json`.

```
$ node ./index.mjs
0x3c77d7ab493a6f97336cba64c01b69d56fa2d2699d01841f16173842e427bb3f
```
