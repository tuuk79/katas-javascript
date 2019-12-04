var findUnpaired = require('./odd-occurrences-in-array.js').findUnpaired;

describe('odd occurrences in array', () => {
  it('([1],1) should return [1]', () => {
    var given = [1];
    var rotate = 1;
    var result = findUnpaired(given);

    expect(result).toEqual(given);
  });

// it('([1,2],1) returns [2,1] ', () => {
//   var given = [1, 2];
//   var rotate = 1;
//   var result = findUnpaired(given);
//
//   expect(result).toEqual([2, 1]);
// });
});
