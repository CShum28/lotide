// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  const arrayOne = Object.keys(object1);
  const arrayTwo = Object.keys(object2);
  if (
    object1 === undefined ||
    object2 === undefined ||
    arrayOne.length !== arrayTwo.length
  ) {
    return false;
  }
  for (const key of arrayOne) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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

module.exports = eqObjects;

// Test Code
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };
// eqObjects(shirtObject, longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
);

// Week 3 - Stretch Project
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
//     if (!eqKeyValue(object1, object2, key)) {
//       return false;
//     }
//   }
//   return true;
// };

// const eqKeyValue = function (object1, object2, key) {
//   if (typeof object1[key] === "object") {
//     //check if it is an object / array
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       return eqArrays(object1[key], object2[key]);
//     } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
//       return eqObjects(object1[key], object2[key]);
//     } else {
//       return false;
//     }
//   } else {
//     // primitive values
//     if (object1[key] !== object2[key]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
