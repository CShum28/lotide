// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (tvGenres, show) {
  let genres = Object.keys(tvGenres);
  for (const genre of genres) {
    if (tvGenres[genre] === show) {
      return genre;
    }
  }
};

// const findKeyByValue = function (tvGenres, show) {
//   for (const genre in tvGenres) {
//     if (tvGenres[genre] === show) {
//       return genre;
//     }
//   }
// };

// const findKeyByValue = function (tvGenres, show) {
//   let genres = Object.keys(tvGenres);
//   for (let i = 0; i < genres.length; i++) {
//     if (tvGenres[genres[i]] === show) {
//       return genres[i];
//     }
//   }
// };

// const findKeyByValue = function (tvGenres, show) {
//   return Object.keys(tvGenres).find((key) => tvGenres[key] === show);
// };

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
// Test Code
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
