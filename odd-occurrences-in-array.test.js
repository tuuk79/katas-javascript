var findUnpaired = require('./odd-occurrences-in-array.js').findUnpaired;

describe('odd occurrences in array', () => {
  it('[1] should return [1]', () => {
    var given = [1];
    var result = findUnpaired(given);

    expect(result).toEqual(1);
  });

});
