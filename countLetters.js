// FUNCTION IMPLEMENTATION
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = (sentence) => {
  sentence = sentence.replace(/ /g, "");
  let output = {};
  for (const letter of sentence) {
    if (!(letter in output)) {
      // if (!output[letter]) { - this works as well
      output[letter] = 1;
    } else {
      output[letter] += 1;
    }
  }
  return output;
};

module.exports = countLetters;

// TEST CODE
console.log(countLetters("lighthouse in the house"));
