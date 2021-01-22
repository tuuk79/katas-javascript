function findThreeLargestNumbers(array) {
  const threeLargest = [];

  return array;
}

describe("find three largest numbers", () => {
  it("should return [2,3,4]", () => {
    const array = [1, 2, 3, 4];
    const actual = findThreeLargestNumbers(array);
    const expected = [2, 3, 4];
    expect(actual).toEqual(expected);
  });
});
