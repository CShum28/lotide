const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");

describe("#assertArrayEqualTest", () => {
  it("should return 🟢The arrays are the same from [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(
      assertArraysEqual([1, 2, 3], [1, 2, 3]),
      "🟢The arrays are the same"
    );
  });
  it("should return 🔴The arrays are not the same from [ 1, 2 ], [1, 2, 3]", () => {
    assert.strictEqual(
      assertArraysEqual([1, 2], [1, 2, 3]),
      "🔴The arrays are not the same"
    );
  });
});
