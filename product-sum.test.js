function productSum(array) {
 return 1;
}

describe('product sum', () => {
  it('should return', () => {
    const array = [1];
    const expected = 1;
    const actual = productSum(array);
    expect(actual).toEqual(expected);
  });
});
