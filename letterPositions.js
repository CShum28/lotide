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

const letterPositions = function (sentence) {
  const results = {};
  let counter = 0;
  for (const letter of sentence) {
    if (letter === " ") {
      counter++;
    } else if (!(letter in results)) {
      results[letter] = [counter];
      counter++;
    } else {
      results[letter].push(counter);
      counter++;
    }
  }
  return results;
};

module.exports = letterPositions;
// Another way to do it:
// const letterPositions = function (sentence) {
//   const results = {};
//   for (const index in sentence) {
//     // use for in.. on sentence to get the index (aka - 0, 1, 2...)
//     const letter = sentence[index];
//     if (letter === " ") {
//     } else if (!(letter in results)) {
//       results[letter] = [Number(index)];
//     } else {
//       results[letter].push(Number(index));
//     }
//   }
//   return results;
// };

// Test code
console.log(letterPositions("lighthouse in the house"));
console.log(
  assertArraysEqual(letterPositions("hello"), {
    h: [0],
    e: [1],
    l: [2, 3],
    o: [4],
  })
);
assertArraysEqual(letterPositions("hello").e, [1]);
