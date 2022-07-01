function mergeSort(array) {
	if (array.length <= 1) return array
	const mid = array.length / 2 - 1
	const leftHalf = array.slice(0, mid + 1)
	const rightHalf = array.slice(mid + 1, array.length)

	console.log(array, leftHalf, rightHalf)

	const leftResult = mergeSort(leftHalf)
	const rightResult = mergeSort(rightHalf)
	return merge(leftResult, rightResult)

}

function merge(left, right) {
	if (left[0] > right[0]) {
		return [...right, ...left]
	} else {
		return [...left, ...right]
	}
}

describe("merge sort", () => {
	it("should sort [] to []", () => {
		const input = [];
		const actual = mergeSort(input);
		const expected = [];
		expect(actual).toEqual(expected);
	});

	it("should sort [1] to [1]", () => {
		const input = [1];
		const actual = mergeSort(input);
		const expected = [1];
		expect(actual).toEqual(expected);
	});

	it("should sort [5,2] to [2,5]", () => {
		const input = [5,2];
		const actual = mergeSort(input, 0, input.length - 1);
		const expected = [2,5];
		expect(actual).toEqual(expected);
	});
});
