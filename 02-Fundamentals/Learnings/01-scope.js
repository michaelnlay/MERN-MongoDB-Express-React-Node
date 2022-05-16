//Scope is the visibility, or accessibility of information, such as variables and functions, to a particular section of code. JavaScript is function scoped and traditionally has two types of scope: global and local. New scopes are created by defining functions.

//Global Scope ===============================
// Every JavaScript application has a global scope. By definition that makes it omnipresent, which means that any variables or functions defined within are always available to every aspect of your application.

// Local Scope===============================================
// Local scope, in contrast, has much narrower program visibility. It is localized to the particular function in which that information is defined.

var beatles = ["Paul", "George", "John", "Ringo"];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];

      console.log(name + " was found at index " + index);
      //Paul with index of 0
      //George with index of 1
      //John with index of 2
      //Ringo with index of 3
    }
    console.log("name and index after loop is " + name + ":" + index);
    //Ringo with index of 3
  }
  actuallyPrintingNames();
}
printNames(beatles);

// //const and let ==================================
// With the release of ES2015 (ES6) we have two new ways to declare variables: const and let.
// These new declarations give us the ability to scope information more precisely to individual sections of code, called block scoping. This gives us greater control over information visibility and allows us to reuse variable names in the same function, but different code blocks, without conflict. A code block is defined by opening and closing curly braces, {}.

// While both const and let are block scoped there are some differences we need to understand. let allows for reassignment of our declared variables content and does not require a value upon declaration. const, on the other hand, must assign a value at creation and that value may not change for the life of the variable. It is immutable.

// With that knowledge let us refactor the previous example to use our new variable declarations. What should be constant? What information changes over time? I might posit that our names array should never assume a different array, so we should certainly use const.

//Final refactored code should be like====================
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
  
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

//difference between var vs. let vs. const
/*
var is limited only by the functional scope
let is limited by functional scope AND block scope (loops and conditionals)
const behaves just like let when it comes to scoping

const is used to declare variables that you don't want any other part of the code to reassign that variable




*/
let daysInWeek =7;
daysInWeek = 20;

const daysInWeek =7; //so no one can reassign the value
// daysInWeek = 20;
console.log("day i a week is :" + daysInWeek)