const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe("#assertEqualTest", () => {
  it("should return 🟢🟢🟢Assertion Passed: 1 === 1 from (1, 1)", () => {
    assert.strictEqual(assertEqual(1, 1), `🟢🟢🟢Assertion Passed: 1 === 1`);
  });
  it('should return 🔴🔴🔴Assertion Failed: Lighthouse Labs !== Bootcamp from ("Lighthouse Labs", "Bootcamp")', () => {
    assert.strictEqual(
      assertEqual("Lighthouse Labs", "Bootcamp"),
      `🔴🔴🔴Assertion Failed: Lighthouse Labs !== Bootcamp`
    );
  });
});
