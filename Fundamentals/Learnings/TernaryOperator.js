//The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

//Essentially, a ternary operator is a short version of an if statement. Let's go over the difference between the two with a couple basic examples:

//Basic if statement*************************

let canAfford = (itemPrice, accountBalance) => {
  if (itemPrice > accountBalance) {
    return `Cannot afford! You are $${itemPrice - accountBalance} short`;
  } else {
    return "Can afford";
  }
};

//Ternary Statment ******************************
let canAfford = (itemPrice, accountBalance) => {
  return itemPrice > accountBalance
    ? `Cannot afford! You are $${itemPrice - accountBalance} short`
    : "Can afford";
  //is the itemPrice accountBalance
  // yes? then return "cannot afford"
  // no then return "can afford"
};

let myBankAccountBalance = 1000;
let drone = 1001;

let droneOnSale = drone - drone * 0.03;

console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));

// Special Note
// Take care when nesting ternary statements, as they can tend to become unwieldy and unreadable. For instance, consider the following:

const myVar = 10 < 20
    ? 5 < 20
        ? true
        : false
    :false
