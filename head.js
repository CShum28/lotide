// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const assertEqual = require("./assertEqual");

const head = function (items) {
  return items[0];
};

// TEST CODE
// assertEqual(head([8, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;
