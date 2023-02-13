// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

const eqObjects = function (object1, object2) {
  const arrayOne = Object.keys(object1);
  const arrayTwo = Object.keys(object2);
  if (arrayOne.length === arrayTwo.length) {
    for (const key of arrayOne) {
      if (
        Array.isArray(object1[key]) &&
        Array.isArray(object2[key]) &&
        !eqArrays(object1[key], object2[key]) &&
        object1[key] !== object2[key]
      ) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
