//1 - create a Ninja class
class Ninja {
  //create constuctors
  constructor(name, health = 10) {
    //attributes =======================================
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  //attributes
  sayName() {
    console.log(`Ninja name is ${this.name}`);
    return this;
  }
  showStats() {
    console.log(`Name: ${this.name}, Health:${this.health}`);
    console.log(`Health: ${this.health}`);
    console.log(`Speed: ${this.speed}`);
    console.log(`Strength: ${this.strength}`);
    return this;
  }
  drinkSake() {
    this.health += 10;
    console.log("Drinking some tasty sake!!!");
    console.log(`Now Ryu's health: ${this.health}`);
    return this;
  }
}

const ninja1 = new Ninja("Ryu");
ninja1.sayName().showStats().drinkSake().showStats(); //in order to use these, need to return this for all the methods.
// ninja1.sayName();
// ninja1.showStat();
// ninja1.drinkSake();

/* Tasks==================================

1,Create a Ninja class 
2, add an attribute: name 
3, add an attribute: health 
4, add a attribute: speed - give a default value of 3 
5, add a attribute: strength - give a default value of 3 
6, add a method: sayName() - This should log that Ninja's name to the console
7, add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
8, add a method: drinkSake() - This should add +10 Health to the Ninja
*/
