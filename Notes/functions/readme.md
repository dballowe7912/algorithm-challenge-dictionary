# Functions

`Function Statement`

```js
function greet(name) {
  console.log('Hello ' + name);
}
```

`Function Expression`

```js
var greet = function (name) {
  console.log('Hello ' + name);
};
```

`Immediately Invoked Function Expression (IIFE)`

```js
var greeting = (function (name) {
  console.log('Hello ' + name);
})('John Doe');
```

`Stand Alone IIFE`

```js
(function (name) {
  console.log('Hello ' + name);
})('John Doe');
```

`Arguments` are the parameters you pass to a function, also a keyword which contains them all.

```js
function greet(firstName, lastName, language) {
  console.log(firstName);
  console.log(lastName);
  console.log(language);
}

greet();
```

## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. - from [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

Closures are functions that have access to the variables in the scope in which they were created, even after the scope has been closed. This allows you to create functions that can access data that is no longer in scope, which can be useful for things like callbacks and event handlers.

Another definition is: A closure is the closed-over **variable enviroment** of the execution context **in which a function was created,** even **_after_** that execution context is gone. In other words, A closure gives a function access to all the variables **of its parent function,** even **_after_** that parent function has returned. The function keeps a **reference** to its outer scope, which **_preserves_** the scope chain throughout time.

A closure makes sure that a function doesn't lose connection to **variables that existed at the function's birth place**

A closure is like a **backpack** that a function carries around wherever it goes. This backpack has all the **variables that were present in the enviroment where the function was created**

Here is an example of a closure in JavaScript:

```js
function makeCounter() {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}

var counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

In this example, the makeCounter() function creates a closure that has access to the count variable. The counter() function returns the current value of the count variable, and it also increments the value of the count variable.

Another example:

```js
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);
```

Closures can be used to create some very powerful and useful code. They are a fundamental concept in JavaScript, and they are worth understanding.

```js
function greet(whatToSay) {
  return function (name) {
    console.log(`${whatToSay} ${name}`);
  };
}

var sayHi = greet('Hi');
sayHi('John');
```

## `call(), apply(), and bind()`

`bind()` allows you to call a function with a specific "this" value.

`call()` method calls a function with a given this value and arguments provided individually. The call() method allows you to specify the value of this inside the function.

`apply()` is used to call a function with a specified context and an array of arguments. The same as the `call()`method, except an array is passed in as an argument.

```js
functionName.apply(context, arguments: []);
```

## Function Currying

Function currying is a technique for transforming a function that takes multiple arguments into a function that takes one argument at a time. This can be useful for making functions more composable and reusable.

---

## First Class Funtions

JavaScript treats functions as first-class citizens, which means they are simply values and just another "type" of object.

---

## Higher-Order Functions

A function that receives another function as an argument, that returns a new function, or both
