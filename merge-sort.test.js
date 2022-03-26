// use pointers or indexes for efficiency

function mergeSort(input) {
	if (input.length === 0) {
		return [];
	}

	if (input.length === 1) {
		return input;
	}
}

function getMidPoint(array) {
	const lastIndex = array.length - 1
	return Math.floor(lastIndex  / 2)
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

	it("should get the midpoint of [1,2,3] to be index 1", () => {
		const array = [1, 2, 3];
		const actual = getMidPoint(array);
		const expected = 1;
		expect(actual).toEqual(expected);
	});
	
	it("should get the midpoint of [1,2] to be index 0", () => {
		const array = [1, 2];
		const actual = getMidPoint(array);
		const expected = 0;
		expect(actual).toEqual(expected);
	});
	
	it("should sort [5,2] to [2,5]", () => {
		const input = [5,2];
		const actual = mergeSort(input);
		const expected = [2,5];
		expect(actual).toEqual(expected);
	});
});
