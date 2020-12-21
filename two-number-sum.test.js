function twoNumberSum(array,targetSum) {
  const seen = [];
  for (let i = 0; i < array.length; i++) {
    const remaining = targetSum - array[i];
    if (seen.includes(remaining)) {
      return [array[i],remaining];
    }
    seen.push(array[i]);
  }

  return [];
}

describe('two number sum', () => {
  it('[3,5,-4,8,11,1-1,6] and 10 should be [-1,11]', () => {
    const array = [3,5,-4,8,11,1,-1,6];
    const targetSum = 10;
    const result = twoNumberSum(array,targetSum);
    expect(result).toEqual([-1,11])
  });

  it('[3,5,-4,8,11,1-1,6] and 50 should be []', () => {
    const array = [3,5,-4,8,11,1,-1,6];
    const targetSum = 50;
    const result = twoNumberSum(array,targetSum);
    expect(result).toEqual([])
  });

  it('[3,5,-4,8,11,1-1,6] and 50 should be []', () => {
    const array = [3,5,-4,8,11,1,-1,6];
    const targetSum = 50;
    const result = twoNumberSum(array,targetSum);
    expect(result).toEqual([])
  });
});
