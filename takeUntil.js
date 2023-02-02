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

// const takeUntil = function (array, callback) {
//   let output = [];
//   let i = 0;
//   do {
//     output.push(array[i]);
//     i++;
//   } while (!callback(array[i]) && i < array.length);
//   return output;
// };

const takeUntil = function (array, callback) {
  let output = [];
  for (const arr of array) {
    if (!callback(arr)) {
      output.push(arr);
    } else {
      return output;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1); // [ 1, 2, 5, 7, 2 ]

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
