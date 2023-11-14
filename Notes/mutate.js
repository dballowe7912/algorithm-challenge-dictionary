
var a = 3;
var b;
b = a;
a = 2;
console.log(a); // 2
console.log(b); // 3

var c = {
  greeting: 'hi'
};
var d;
d = c; // points to same spot in memory

c.greeting = 'hello'; // mutate
console.log(c);
console.log(d);

function changeGreeting(obj) {
  obj.greeting = 'Hola'; // mutate
}

changeGreeting(d); // mutates c too

console.log(d);
console.log(c); // mutate

// equals operator sets up new memory address
c = { greeting: 'howdy' };

console.log(d);
console.log(c);
