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

const middle = function (array) {
  const i = Math.ceil(array.length / 2) - 1;
  if (array.length < 3) {
    console.log([]);
  } else if (array.length % 2 !== 0) {
    console.log([array[i]]);
  } else if (array.length % 2 === 0) {
    console.log([array[i], array[i + 1]]);
  }
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

//check with the following functions - must change console.log to return in middle function, if we want the following to work:
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
