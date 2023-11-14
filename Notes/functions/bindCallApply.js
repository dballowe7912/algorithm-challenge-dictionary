var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    var fullName = `${this.firstName} ${this.lastName}`

    return fullName;
  }
}

var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log(`Arguments: ${lang1} ${lang2}`);
  console.log('------------');
}

var logPersonName = logName.bind(person)

logPersonName('en', 'es');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

// Function borrowing
var person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
}

console.log(person.getFullName.apply(person2));

// Function Currying
