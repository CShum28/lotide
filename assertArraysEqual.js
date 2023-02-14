// FUNCTION IMPLEMENTATION

const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return `🟢The arrays are the same`;
  } else {
    return `🔴The arrays are not the same`;
  }
};



module.exports = assertArraysEqual;

// const eqArrays = function (inputOne, inputTwo) {
//   if (inputOne.length !== inputTwo.length) {
//     return false;
//   }
//   for (let i = 0; i < inputOne.length; i++) {
//     if (inputOne[i] !== inputTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
