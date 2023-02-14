// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `🟢🟢🟢Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual;

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function (object1, object2) {
//   const arrayOne = Object.keys(object1);
//   const arrayTwo = Object.keys(object2);
//   if (
//     object1 === undefined ||
//     object2 === undefined ||
//     arrayOne.length !== arrayTwo.length
//   ) {
//     return false;
//   }
//   for (const key of arrayOne) {
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       if (!eqArrays(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

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

// // Test Code
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
// assertObjectsEqual(shirtObject, anotherShirtObject); // => true

// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };
// eqObjects(shirtObject, longSleeveShirtObject); // => false
// assertObjectsEqual(shirtObject, longSleeveShirtObject); // => false

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
// assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
