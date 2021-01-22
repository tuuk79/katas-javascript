function getNthFib(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return getNthFib(n-2) + getNthFib(n-1);
}

describe('nth fibonacci', () => {
  it('should return 1 when n = 2', () => {
    const n = 2;
    const actual = getNthFib(n);
    const expected = 1;
    expect(actual).toEqual(expected);
  });
  
  it('should return 5 when n = 6', () => {
    const n = 6;
    const actual = getNthFib(n);
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  it('should return 34 when n = 10', () => {
    const n = 10;
    const actual = getNthFib(n);
    const expected = 34;
    expect(actual).toEqual(expected);
  });
});
