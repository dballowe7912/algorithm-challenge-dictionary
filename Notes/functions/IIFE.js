// Immediately Invoked Function Expressions

function greet(name) {
  console.log(`Hello ${name}`);
};

greet('Donald');

var greetFunc = function(name) {
  console.log(`Hello ${name}`);
};

greetFunc('Donald');

var greeting = function(name) {
  console.log('Hello ' + name)
}('Donald');

(function(name) {
  console.log('Hello ' + name)
}('Donald'));
