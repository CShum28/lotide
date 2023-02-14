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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  // temporary code:
  const results = [];
  for (const word of array) {
    results.push(callback(word));
  }
  return results;
};

module.exports = map;

const results1 = map(words, (word) => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(
  map(["hello", "bye", "kyle"], (x) => x + "hi"),
  ["hellohi", "byehi", "kylehi"]
);
assertArraysEqual(
  map([1, 2, 3, 4, 5], (x) => x + 2),
  [3, 4, 5, 6, 7]
);
