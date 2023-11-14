// Parent class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log('Shape Name: ' + this.name);
  }
}

// Sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    // by calling super and passing in name, Rectangle inherits from Shapes constructor
    super(name);

    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log('Rectangle Area: ' + this.area());
  }
}

const square = new Rectangle('Square', 20, 20);
square.logName();
// console.log(square.area())
// console.log(square.isSquare())
// console.log(square.perimeter())
// square.logArea();
// console.log(Object.getPrototypeOf(square))
