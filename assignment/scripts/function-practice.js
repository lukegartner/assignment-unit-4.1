console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello Jane!"', helloName("Jane"));
console.log('Test - should say "Hello Luke!"', helloName("Luke"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
// test
console.log("Test - should say 3", addNumbers(2, 1));
console.log("Test - should say -2", addNumbers(-34, 32));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}

// test
console.log("Test - should say 144", multiplyThree(3, 4, 12));
console.log("Test - should say 0", multiplyThree(0, 4, 12));
console.log("Test - should say -144", multiplyThree(-3, 4, 12));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false)
console.log("Test - should say true", isPositive(32));
console.log("Test - should say false", isPositive(0));
console.log("Test - should say false", isPositive(-99));

// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];
}
// test
console.log("Test - should say banana", getLast(["apple", "pear", "banana"]));
console.log("Test - should say 3", getLast([1, 2, 3]));
console.log("Test - should say undefined", getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}
// test
console.log("Test - should say true", find(3, [1, 2, 3]));
console.log("Test - should say false", find(3, [1, 2, 4]));
console.log(
  "Test - should say true",
  find("banana", ["apple", "banana", "pear"])
);
console.log(
  "Test - should say false",
  find("banana", ["apple", "orange", "pear"])
);
console.log("Test - should say false", find(3, []));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
