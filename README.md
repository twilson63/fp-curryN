# fp-curryN

Using a curry function, you can give any variadic function
the ability to be partially applied.

```
npm install fp-curryN
```

## Usage

```
const curryN = require('fp-curryN')
const add = (a, b) => a + b
const sum = curryN(3, reduce)(add, 0)
```
