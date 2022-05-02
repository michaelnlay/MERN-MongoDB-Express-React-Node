// Assignment: JavaScript Hoisting

// GIVEN
console.log(example);
var example = "I'm the example!"; //will logs undefined
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//1
console.log(hello); //undefined
var hello = "world";

//2
var needle = "haystack";
test();
function test() {
  var needle = "magnet"; //without this line, it'll log haystack
  console.log(needle); //magnet
}

//3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log("why not print this:" + brendan); //wont log without call function print
}
console.log("print:" + brendan); //super cool

//4
var food = "chicken";
console.log(food); //chicken
eat();
function eat() {
  food = "half-chicken";
  console.log(food); //half-chicken
  var food = "gone";
}

/*
var food;
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
 food = "gone";

  food = 'chicken'
  console.log(food);
  eat();

*/

//5

mean();
console.log("print4:" + food);
var mean = function () {
  food = "chicken";
  console.log("print 1" + food);
  var food = "fish";
  console.log("print2:" + food);
};
console.log("print 3:" + food);
//TypeError because mean is not a function

//6
console.log("print1:" + genre); //undefined (1st)
var genre = "disco";
rewind();
function rewind() {
  genre = "rock"; //why this still work without declaring an variable?
  console.log("print2:" + genre); //rock (2nd)
  var genre = "r&b";
  console.log("print3:" + genre); //r&b (3rd)
}
console.log("print4" + genre); //disco //(4th)

//7
dojo = "san jose";
console.log("1:" + dojo); //san jose
learn();
function learn() {
  dojo = "seattle";
  console.log("2" + dojo); //seattle
  var dojo = "burbank";
  console.log("3:" + dojo); //burbank
}
console.log("4" + dojo); //sanjose

//8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  let dojo = {};
  dojo.name1 = name;
  dojo.students1 = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

/*
function makeDojo(name, students) {
  var dojo = {};
  dojo.name1 = name;
  dojo.students1 = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
*/
