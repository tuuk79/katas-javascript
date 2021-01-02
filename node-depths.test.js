class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function nodeDepths(node, depth = 0) {
  if (node === null) return 0;
  return depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1);
}

describe('node depths', () => {
  it('should return 2', () => {
    const node = new BinaryTree(0);
    node.left = new BinaryTree(1);
    node.right = new BinaryTree(2);
    const actual = nodeDepths(node);
    const expected = 2;
    expect(actual).toEqual(expected);
  });

  it('should return 3', () => {
    const node = new BinaryTree(0);
    node.left = new BinaryTree(1);
    node.left.left = new BinaryTree(2);
    const actual = nodeDepths(node);
    const expected = 3;
    expect(actual).toEqual(expected);
  });
  
  it('should return 3', () => {
    const node = new BinaryTree(0);
    node.left = new BinaryTree(1);
    node.right = new BinaryTree(3);
    node.left.left = new BinaryTree(2);
    const actual = nodeDepths(node);
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
