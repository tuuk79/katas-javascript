var reversePairs = require('./reverse-pairs');

describe('reverse pairs', () => {
  it('should get [2,3] from [1,2,3]', () => {
    var input = [1, 2, 3];
    var i = 1;
    var sub = reversePairs.getSub(input, i);
    expect(sub).toEqual([2, 3]);
  });

  it('[1,3,2,3,1] should yield 2', () => {
    var input = [1, 3, 2, 3, 1];
    var result = reversePairs.getReversePairs(input);
    expect(result).toBe(2);
  });
});
