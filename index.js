module.exports = curryN

function curryN(n, fn) {
  let _args = []
  return function handler(...args) {
    _args = _args.concat(args)
    if (not(equals(_args.length, n))) {
      return handler
    }
    const result = fn.apply(null, _args)
    _args.length = 0
    return result
  }
}

function equals(a, b) {
  return a === b
}

function not(a) {
  return !a
}
