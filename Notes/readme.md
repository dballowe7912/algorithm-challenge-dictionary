# Mutating
## By Value vs. By Reference
### By Value (Primatives)
```js
var a = 3;
var b;
b = a; // makes a new location in memory
a = 2;
console.log(a); // 2
console.log(b); // 3
```

### By Reference (all objects (including functions))
```js
var c = {
  greeting: 'hi'
};
var d;
d = c; // points to same memory location
c.greeting = 'hello'; // mutate
console.log(c);
console.log(d);
```
### By Reference (even as parameters)
```js
function changeGreeting(obj) {
  obj.greeting = 'Hola'; // mutate
}

changeGreeting(d); // also mutates c

```
### Equal Operator
## Sets up new memory space (new address)
```js
c = { greeting: 'howdy' };
```
