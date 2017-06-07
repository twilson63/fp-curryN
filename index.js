module.exports = curryN

function curryN(arity, fn, ...curried) {
  return function(...called) {
    const args = [...curried, ...called]
    return arity <= args.length ? fn(...args) : curryN(arity, fn, ...args)
  }
}
