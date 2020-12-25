class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, sums, 0);
  return sums;
}

function calculateBranchSums(node, sums, sum) {
  sum += node.value;
  if (node.left) calculateBranchSums(node.left, sums, sum);
  if (node.right) calculateBranchSums(node.right, sums, sum);
  if (!node.left && !node.right) {
    sums.push(sum);
  }
}

describe("branch sums", () => {
  it("should return [1]", () => {
    const root = new BinaryTree(1);
    const actual = branchSums(root);
    const expected = [1];
    expect(actual).toEqual(expected);
  });

  it("should return [3]", () => {
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    const actual = branchSums(root);
    const expected = [3];
    expect(actual).toEqual(expected);
  });

  it("should return [3,4]", () => {
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    const actual = branchSums(root);
    const expected = [3, 4];
    expect(actual).toEqual(expected);
  });

  it("should return [3,4]", () => {
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.left.left = new BinaryTree(5);
    root.right = new BinaryTree(3);
    const actual = branchSums(root);
    const expected = [8, 4];
    expect(actual).toEqual(expected);
  });
});
