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
function isFirstLetter(letter, string) {
  return string[0] === letter;
}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("", ""));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
const positives = (arr) => {
  return arr.filter((num) => num > 0);
};
// test

console.log("Test - should say [1, 3]", positives([-3, -1, 0, 1, 3]));
console.log("Test - should say []", positives([-3, -1, 0, -1, -3]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

/*
DESCRIPTION:
Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
Good luck, and stay safe!
*/

function mazeRunner(maze, directions) {
  // result
  let result = "";

  // find starting point
  let startingPointRow;
  let startingPointColumn;

  maze.forEach((currentValue, index) => {
    if (currentValue.indexOf(2) !== -1) {
      startingPointRow = index;
      startingPointColumn = currentValue.indexOf(2);
    }
  });
  let currentPoint = [startingPointRow, startingPointColumn];

  const check = (location) => {
    let locationValue = maze[location[0]]
      ? maze[location[0]][location[1]]
      : maze[location[0]];
    switch (locationValue) {
      case 0:
        break;
      case 1:
        result = "Dead";
        break;

      case 2:
        break;
      case 3:
        result = "Finish";
        break;

      case undefined:
        result = "Dead";
        break;

      default:
        break;
    }
  };

  // Switch statement for each direction case
  for (let direction of directions) {
    console.log(direction);

    if (result) {
      return result;
    }

    switch (direction) {
      case "N":
        currentPoint[0] -= 1;
        check(currentPoint);
        break;
      case "S":
        currentPoint[0] += 1;
        check(currentPoint);
        break;
      case "E":
        currentPoint[1] += 1;
        check(currentPoint);
        break;
      case "W":
        currentPoint[1] -= 1;
        check(currentPoint);
        break;

      default:
        break;
    }
  }

  if (result) {
    {
      return result;
    }
  }
  result = "Lost";
  return result;
}

// Tests
maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];
directions = ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"];

console.log("Test - should say Finish", mazeRunner(maze, directions));
console.log(
  "Test - should say Finish",
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "S",
    "S",
    "E",
    "E",
    "N",
    "N",
    "E",
  ])
);
console.log(
  "Test - should say Finish",
  mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"])
);

console.log(
  "Test - should say Dead",
  mazeRunner(maze, ["N", "N", "N", "W", "W"])
);
console.log(
  "Test - should say Dead",
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "E",
    "E",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
  ])
);

console.log(
  "Test - should say Lost",
  mazeRunner(maze, ["N", "E", "E", "E", "E"])
);
