/**
 * Fibonacci
 * fib(n) = fib(n-1)+fib(n-2)
 * Sole fibonacci using memoization to avoid re-computing
 */
function fib (n, memo = {}) {
  if (n <= 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else if (!memo[n]) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  } else {
    return memo[n]
  }
  return memo[n]
}

module.exports = fib
