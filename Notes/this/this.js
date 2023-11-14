function a() {
  console.log(this); // points to global namespace
  this.newVariable = 'hello' // sets newVariable on global
}

var b = function() {
  console.log(this);
}

a();
b();

var c = {
  name: 'The c object',
  log: function() {
    var self = this; // points at same location in memory as this
    this.name = 'Updated c object'
    console.log(this); // points to the object therein

    var setName = function(newname) {
      this.name = newname; // points to global obj ???
    }

    setName('Updated again, the c object');
    console.log(this);
  }
}

c.log();
