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

const flatten = function (array) {
  output = [];
  for (let arr of array) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        output.push(arr[i]);
      }
    } else {
      output.push(arr);
    }
  }
  console.log(output);
};

// const flatten = function (array) {
//   const flattenedArray = [];
//   if (Array.isArray(array)) {
//     console.log(flattenedArray.concat(...array));
//   }
// };

// TEST CODE
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
