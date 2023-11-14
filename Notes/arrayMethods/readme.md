`.slice`

```js
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
// creates a shallow copy
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']
```

`.splice`
does the same as slice, but mutates the array.

```js
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']
```

The `reverse()` method reverses an array in place, mutating the original array. To reverse without mutating use `toReverse()`.

```js
let arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
```

`concat()`

```js
let arr = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log([...arr, ...arr2]); // same result
```

`.at()`

```js
const arr = [23, 11, 64];
console.log(arr.at(0)); // 23
```

and works on strings...

```js
console.log('Donald'.at(-1)); // d
```
