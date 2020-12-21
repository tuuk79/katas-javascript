function isValidSubsequence(array, sequence) {
  const filtered = sequence.filter((s) => array.includes(s));

  const check1 = array.length === filtered.length;
  const check2 = filtered.every((val) => array.includes(val));

  return check1 && check2;
}

describe("valid subsequence", () => {
  it("[1] is a subsequence of [1]", () => {
    const array = [1];
    const sequence = [1];
    const result = isValidSubsequence(array, sequence);
    expect(result).toBe(true);
  });

  it("[1] is a subsequence of [1,2]", () => {
    const array = [1];
    const sequence = [1, 2];
    const result = isValidSubsequence(array, sequence);
    expect(result).toBe(true);
  });

  it("[1] is not a subsequence of [2,3]", () => {
    const array = [1];
    const sequence = [2, 3];
    const result = isValidSubsequence(array, sequence);
    expect(result).toBe(false);
  });

  it("[2,3] is a subsequence of [1,2,3]", () => {
    const array = [2, 3];
    const sequence = [1, 2, 3];
    const result = isValidSubsequence(array, sequence);
    expect(result).toBe(true);
  });

  fit("[5, 1, 22, 25, 6, -1, 8, 10] is a subsequence of [10,-1,2,5,-5,19]", () => {
    const sequence = [5, 1, 22, 25, 6, -1, 8, 10];
    const array = [5, 1, 22, 6, -1, 8, 10];
    const result = isValidSubsequence(array, sequence);
    expect(result).toBe(true);
  });
});
