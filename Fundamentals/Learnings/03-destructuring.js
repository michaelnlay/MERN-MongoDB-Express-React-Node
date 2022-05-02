const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  createdAt: 1543945177623,
};
const animals = ["horse", "dog", "fish", "cat", "bird"];

// Assume we want email from person and the first animal as standalone variables. Before ES6 that might look like this:

// BEFORE ES6*****************************************************
// var email = person.email;
// // console.log(email);
// var firstAnimal = animals[0];
// // console.log(firstAnimal);

// Let's do that again, but with destructuring assignment:

// AFTER ES6 *****************************************************
let { email } = person;
const { password } = person;
const [firstAnimal, , thirdAnimal] = animals;
const [, , , , lastAnimal] = animals;
console.log(email);
console.log(password);

// => bob@marley.com
console.log(firstAnimal, thirdAnimal);
console.log(lastAnimal);

// => horse

// Nested Destructuring ***********************************************
// Often we'll be working with much more complex content and we want to take advantage of destructuring these nested structures. For this next example we'll modify our person object to have an array of addresses.

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
  