function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function findLeft(tree) {
	return tree.left.value;
}

function findRight(tree) {
	return tree.right.value;
}

function findTotal(tree, total) {
	if (!tree) return 0;
	if (!tree.left && !tree.right) return (total += tree.value);
	return (
		tree.value + findTotal(tree.left, total) + findTotal(tree.right, total)
	);
}

function bfsHelper(tree, queue, level) {
	if (!tree) return;
	if (!tree.left && !tree.right) return;

	if (queue.length == 0) queue.push({ value: tree.value, level: level });

	level++;
	queue.push({ value: tree.left.value, level: level });
	queue.push({ value: tree.right.value, level: level });

	bfsHelper(tree.left, queue, level);
	bfsHelper(tree.right, queue, level);
}

function bfs(tree, targetLevel) {
	const queue = [];
	let sum = 0;
	let level = 0;
	const result = bfsHelper(tree, queue, level);

	for (let i = 0; i < queue.length; i++) {
		if (queue[i].level == targetLevel) {
			sum += queue[i].value;
		}
	}

	return sum;
}

describe("binary search", () => {
	it("should find left of tree", () => {
		const tree = new Node(10);
		tree.left = new Node(8);
		tree.right = new Node(12);

		const expected = 8;
		const actual = findLeft(tree);

		expect(actual).toBe(expected);
	});

	it("should find right of tree", () => {
		const tree = new Node(10);
		tree.left = new Node(8);
		tree.right = new Node(12);

		const expected = 12;
		const actual = findRight(tree);

		expect(actual).toBe(expected);
	});

	it("should total tree to 30", () => {
		const tree = new Node(10);
		tree.left = new Node(8);
		tree.right = new Node(12);

		const expected = 30;
		const actual = findTotal(tree, 0);
		expect(actual).toBe(expected);
	});

	it("should total tree to 30", () => {
		let tree = new Node(10);
		tree.left = new Node(8);
		tree.left.left = new Node(10);
		tree.right = new Node(12);

		const expected = 40;
		const actual = findTotal(tree, 0);
		expect(actual).toBe(expected);
	});

	it("should do bfs and return sum at target level", () => {
		let tree = new Node(1);
		tree.left = new Node(2);
		tree.right = new Node(3);
		tree.left.left = new Node(4);
		tree.left.right = new Node(5);
		tree.right.left = new Node(6);
		tree.right.right = new Node(7);

		const expected = 5;
		const targetLevel = 1;
		const actual = bfs(tree, targetLevel);

		expect(actual).toBe(expected);
	});
});
