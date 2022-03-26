function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

function calculateSum(root) {
	if (!root) return 0;
	if (!root.left && !root.right) return root.val;
	return root.val + calculateSum(root.left) + calculateSum(root.right);
}

describe("recursion practice", () => {
	it("should return the root value if a root with no left or right exist", () => {
		const root = new TreeNode(1, null, null);
		const actual = calculateSum(root);
		const expected = 1;
		expect(actual).toEqual(expected);
	});

	it("should return sum of 3", () => {
		const root = new TreeNode(1, new TreeNode(2, null, null), null);
		const actual = calculateSum(root);
		const expected = 3;
		expect(actual).toEqual(expected);
	});

	it("should return sum of 6", () => {
		const root = new TreeNode(
			1,
			new TreeNode(2, null, null),
			new TreeNode(3, null, null)
		);
		const actual = calculateSum(root);
		const expected = 6;
		expect(actual).toEqual(expected);
	});

	it("should return sum of 7", () => {
		const root = new TreeNode(
			1,
			new TreeNode(2, new TreeNode(4, null, null), null)
		);
		const actual = calculateSum(root);
		const expected = 7;
		expect(actual).toEqual(expected);
	});
});
