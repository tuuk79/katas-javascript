class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (tree.value === target) return tree.value;
  if (target < tree.value) {
    distance = Math.abs(target - tree.value);
    if (distance < Math.abs(closest - target)) {
      closest = tree.value;
    }
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else {
    distance = Math.abs(target - tree.value);
    if (distance < Math.abs(closest - target)) {
      closest = tree.value;
    }
    return findClosestValueInBstHelper(tree.right, target, closest);
  }
}

describe("find closest value in bst", () => {
  it("should return 10", () => {
    const root = new BST(10);

    const target = 10;
    const actual = findClosestValueInBst(root, target);
    const expected = 10;
    expect(actual).toEqual(expected);
  });

  it("should return 13", () => {
    const root = new BST(12);
    root.left = new BST(10);
    root.right = new BST(13);

    const target = 13;
    const actual = findClosestValueInBst(root, target);
    const expected = 13;
    expect(actual).toEqual(expected);
  });

  it("should return 10", () => {
    const root = new BST(12);
    root.left = new BST(10);
    root.right = new BST(13);

    const target = 10;
    const actual = findClosestValueInBst(root, target);
    const expected = 10;
    expect(actual).toEqual(expected);
  });

  it("should return 12", () => {
    const root = new BST(12);
    root.left = new BST(10);
    root.right = new BST(13);

    const target = 11;
    const actual = findClosestValueInBst(root, target);
    const expected = 12;
    expect(actual).toEqual(expected);
  });

  it("should return 12", () => {
    const root = new BST(12);
    root.left = new BST(5);
    root.right = new BST(13);

    const target = 10;
    const actual = findClosestValueInBst(root, target);
    const expected = 12;
    expect(actual).toEqual(expected);
  });

  it("should return 5", () => {
    const root = new BST(12);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.right = new BST(13);

    const target = 5;
    const actual = findClosestValueInBst(root, target);
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  it("should return 5", () => {
    const root = new BST(12);
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.right = new BST(13);

    const target = 6;
    const actual = findClosestValueInBst(root, target);
    const expected = 5;
    expect(actual).toEqual(expected);
  });
});
