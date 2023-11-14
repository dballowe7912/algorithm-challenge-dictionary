function multiply(a, b) {
	return a * b;
}

// creates a new function, setting a = 2
var multiplyByTwo = multiply.bind(this, 2);
var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByTwo(5));
console.log(multiplyByThree(5));
