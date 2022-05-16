class Olympian {
  //constructor -> the things to do upon creation of a new olympian
  constructor(nameInput, countryInput, heightInput) {
    //we can define the properties that every olympian will ahve upon creation here inside the constructor
    this.name = nameInput;
    this.country = countryInput;
    this.height = heightInput;
    this.energyLevel = 100; //default value bc every olympian that gets created will start with 100 energylevel
  }

  //functionalities for an olympian will be defined using methods *method*
  competeInEvent() {
    // console.log("competing in event....");
    this.energyLevel -= 5;
    return this;
  }
  takeIceBath() {
    console.log("taking ice bath.......");
    this.energyLevel = 100;
    return this;
  }

  displayInfo() {
    //example: Hi my name is Luka Doncic, I am from Slovenia. I am this many inces tall: 79. Currently my energy level is:100
    //a string that can have variables in it using a javascript template literal
    console.log(
      `Hi my name is ${this.name} I am from ${this.country}. I am ${this.height} inches tall. My energy level is currently at ${this.energyLevel}.`
    );
  }
}
//outside of the class, we can create INSTANCES of the Olympian class
const o1 = new Olympian("Luka Doncic", "Slovenia", 79);
const o2 = new Olympian("Michael Phelp", "USA", 72);
const o3 = new Olympian("Simone Biles", "USA", 60);

o1.competeInEvent()
  .competeInEvent()
  .competeInEvent()
  .takeIceBath()
  .displayInfo();
o2.competeInEvent().displayInfo();

// console.log(o1);
// console.log(o2);
// console.log(o3);
