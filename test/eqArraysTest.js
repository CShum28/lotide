const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrayTest", () => {
  it("should return true from ([1, 2, 3], [1, 2, 3])", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false from ([ 1, 2 ], [ 1, 2, 3])", () => {
    assert.isFalse(eqArrays([1, 2], [1, 2, 3]), false);
  });
});
