class Ninja {
  //create constuctors
  constructor(name) {
    //attributes =======================================
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  //attributes
  sayName() {
    console.log(`Ninja name is ${this.name}`);
  }
  showStats() {
    console.log(`Name: ${this.name}`);
    console.log(`Health: ${this.health}`);
    console.log(`Speed: ${this.speed}`);
    console.log(`Strength: ${this.strength}`);
  }
  drinkSake() {
    this.health += 10;
    console.log("Drinking some tasty sake!!!");
    console.log(`${this.name} has gained ${this.health}.`);
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    this.drinkSake();
    console.log(
      `What one programmer can do in one month, two programmers can do in two months.`
    );
  }
  // drinkSake()
}
const superSensei = new Sensei("Master Lay");
superSensei.speakWisdom();
superSensei.showStats();
