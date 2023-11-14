# Break It Down

- Explicitly write out the steps you need to take.
  - This forces you to think about the code you will write, and helps you catch any issues or misunderstandings beforehand.

```js
// write a function which takes in a string and returns counts of each character in the string.
function charCount() {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}

// break down
function charCount() {
  // make object to return at end
  // loop over string, for each character...
  // if the char is a number/letter AND is a key in obj, add 1 to count
  // if the char is a number/letter AND is not in obj, add it to obj and set value to 1
  // if the char is something else (space, period, etc.) don't do anything
  // return object at end
}
```
