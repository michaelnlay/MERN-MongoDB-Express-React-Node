/*
Inheritance and Super
Inheritance is much easier with the ES6 class syntax. Using the extends keyword, we can define new classes that inherit from existing classes. Inheritance is a common aspect of OOP, and it's important to see how JavaScript does it a little differently. Let's see inheritance in action:
*/
class M5 extends Vehicle {
  constructor(color) {
    super("BMW", "M5", color);
    this.hp = 616;
  }

  printSpecSummary() {
    console.log(
      `BMW M5 with a 4.4L V8 Twin Turbo engine packin ${this.hp}HP and 553 lb-ft TQ`
    );
  }
}

//super() function is a special function that allows to to call the constructor of the parent class. Because our Vehicle class needs a manufacturer, model, and color value, we need to pass 3 arguments through the super() method of our M5 class.

/*
Methods====================================================================
If we run the previous example, you'll notice that drive() is actually specific for the Vehicle class. Let's rewrite it further:
*/

// parent Vehicle class
class Vehicle {
  constructor(manufacturer, model, color) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.miles = 0;
  }
  drive() {
    this.miles += 10;
    console.log(
      `You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`
    );
  }
}

/*
Now our Vehicle when calling drive(), first the child class (the M5 class) will look at itself to see if it has that method. If not, it will work its way up the prototype chain to look for it.

Super Continued===================================================================
Another important property of super is we can call Parent methods with it. Consider this example:
*/

// parent Vehicle class
class Vehicle {
  constructor(manufacturer, model, color) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.miles = 0;
  }
  drive() {
    this.miles += 10;
    console.log(
      `You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`
    );
  }
  // simple method in the parent class
  parentFunction() {
    return "This is coming from the parent!";
  }
}
// child M5 class
class M5 extends Vehicle {
  constructor(color) {
    super("BMW", "M5", color);
  }
  // simple function in the child class
  childFunction() {
    // by using super, we can call the parent method
    const message = super.parentFunction();
    console.log(message);
  }
}
const m5 = new M5("Blue");
m5.childFunction();
