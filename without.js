// FUNCTION IMPLEMENTATION

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🟢The arrays are the same`);
  } else {
    console.log(`🔴The arrays are not the same`);
  }
};

const eqArrays = function (inputOne, inputTwo) {
  if (inputOne.length !== inputTwo.length) {
    return false;
  }
  for (let i = 0; i < inputOne.length; i++) {
    if (inputOne[i] !== inputTwo[i]) {
      return false;
    }
  }
  return true;
};

const without = function (array, excludeNums) {
  let filteredArray = [];
  for (let input of array) {
    if (!excludeNums.includes(input)) {
      filteredArray.push(input);
    }
  }
  return filteredArray;
};

// Another way to do it:
// const without = function (array, excludeNums) {
//   let filteredArray = []; // create an empty array
//   for (let input of array) {
//     // loop all of the numbers in array
//     if (excludeNums.indexOf(input) === -1) {
//       // using indexOf method, if array numbers do not equal excludeNum - push
//       filteredArray.push(input);
//     }
//   }
//   console.log(filteredArray);
// };

// Test Code
console.log(without([1, 2, 3], [1]));
// without(["a", "b", "c"], ["a"]);
// without(["1", "2", "3", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, "hello"), ["world", "lighthouse"]);
