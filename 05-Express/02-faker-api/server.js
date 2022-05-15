//faker library https://github.com/faker-js/faker

//Step 1
const express = require("express"); //import express so we can use express features
const { faker } = require("@faker-js/faker"); //import faker library so we can use it to generate fake random data

const app = express(); //create our ap variable which is an instance of express
const port = 8000; //for express, the backend port is 8000;

//Step 3 - test to make it work by running nodemon server.js
// app.get("/api", (req, res) => {
//     res.json({ message: "Faker API" });
// })

//Step 4 - CONSTRUCT 2 classes (User and Company)
class User {
  constructor() {
    this.password = faker.internet.password(9);
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email(this.firstName, this.lastName);
    this.phoneNumber = faker.phone.phoneNumberFormat();
    this._id = faker.random.numeric(6);
  }
}

class Company {
  constructor() {
    this._id = faker.random.numeric(9);
    this.companyName = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

//Step 5 - CREATE a route to returns a new user
app.get("/api/users", (req, res) => {
  var newUser = new User();
  //create a user
  res.json(newUser);
});

//Route to read company

app.get("/api/companies/new", (req, res) => {
  var newComp = new Company();
  //create a company
  res.json(newComp);
});

//Route to read both company and user
app.get("/api/user/company", (req, res) => {
  let newUser = new User();
  let newComp = new Company();
  res.json({ newUser, newComp });
});

//Step 2
app.listen(port, () => console.log(`Listening on port: ${port}`));
