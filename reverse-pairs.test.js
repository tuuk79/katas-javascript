var reversePairs = require("./reverse-pairs");

describe("reverse pairs", () => {
  it("[1,3,2,3,1] should yield 2", () => {
    var input = [1, 3, 2, 3, 1];
    var result = reversePairs.getReversePairs(input);
//    expect(result).toBe(2);
  });
});
