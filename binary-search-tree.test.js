function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function build(array) {
	let tree = null;
	for (let i = 0; i < array.length; i++) {
		if (i === 0) {
			tree = new Node(array[i]);
		} else {
			if (array[i] < tree.value) {
				tree.left = new Node(array[i]);
			} else {
				tree.right = new Node(array[i]);
			}
		}
	}

	console.log(tree);
}

describe("binary search tree", () => {
	it("should build a binary search tree from an array", () => {
		array = [2, 1, 5];
		build(array);
	});
});
