# Memoized
```js
function fib(n, memo=[]) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
```

# Tabulation
- Storing the result of a previous result in a "table" (usually an array)
- Usually done using iteration
- Better space complexity can be acheived using tabulation
```js
function fib(n) {
  if (num <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
```
