// var person = new Object({
//   firstName: 'Default',
//   lastName: 'Default',
//   getFullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// })

// var john = {
//   firstName: 'John',
//   lastName: 'Doe'
// }

// var jane = {
//   firstName: 'Jane'
// }

// john.__proto__ = person;
// jane.__proto__ = person;

// console.log(john.getFullName());
// console.log(jane.getFullName());
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let john = new Person("John", "Doe");
console.log(john);
