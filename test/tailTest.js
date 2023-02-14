const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns [ 2, 3 ] for [ 1, 2, 3 ]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [ 'hi', 'bye' ] for [ 1, 'hi', 'bye' ]", () => {
    assert.deepEqual(tail([1, "hi", "bye"]), ["hi", "bye"]);
  });
});
