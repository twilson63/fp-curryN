const test = require('tape')

const curryN = require('./')

const add = (a, b) => a + b

test('curry add function', function(t) {
  const add2 = curryN(2, add)(2)
  t.equals(add2(2), 4)
  t.end()
})
