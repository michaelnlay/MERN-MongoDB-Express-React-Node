//problem 1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); //Tesla
console.log(otherRandomCar); //Mercedes

//problem2
const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
console.log(name); //Error because name has changed to otherName
console.log(otherName); //won't log Elon

//problem 3
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password); //12345 because password is not in the person object list
console.log(hashedPassword); //undefined because can't change to hasedPassword if password not in the object list.

//problem4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second); // first =2 not equal to second 5 //false
console.log(first == third); // first =2 equal to third also 2 //true

//problem 5
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); //[1,5,1,8,3,3]
console.log(secondKey[0]); //1
console.log(willThisWork); //5
