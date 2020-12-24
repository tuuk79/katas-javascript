function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;

  const middle = Math.floor((left + right) / 2);

  if (array[middle] === target) return middle;

  if (target > array[middle]) {
    left = middle + 1;
  } else {
    right = middle - 1;
  }

  return binarySearchHelper(array, target, left, right);
}

describe("binary search", () => {
  it("should return 111", () => {
    array = [1, 5, 23, 111];
    target = 111;
    actual = binarySearch(array, target);
    expected = 3;
    expect(actual).toEqual(expected);
  });

  it("should return 23", () => {
    array = [1, 5, 23, 111];
    target = 23;
    actual = binarySearch(array, target);
    expected = 2;
    expect(actual).toEqual(expected);
  });

  it("should return -1", () => {
    array = [1, 5, 23, 111];
    target = 35;
    actual = binarySearch(array, target);
    expected = -1;
    expect(actual).toEqual(expected);
  });
});
