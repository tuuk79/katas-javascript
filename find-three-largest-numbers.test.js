function findThreeLargestNumbers(array) {
	if (array.length < 4) return array.sort();
	array.sort(function (a, b) {
		return a - b;
	});
	return array.splice(array.length - 3, array.length);
}

describe("find three largest numbers", () => {
	it("should return []", () => {
		const array = [];
		const actual = findThreeLargestNumbers(array);
		const expected = [];
		expect(actual).toEqual(expected);
	});

	it("should return [1]", () => {
		const array = [1];
		const actual = findThreeLargestNumbers(array);
		const expected = [1];
		expect(actual).toEqual(expected);
	});

	it("should return [1,2,3]", () => {
		const array = [1, 2, 3];
		const actual = findThreeLargestNumbers(array);
		const expected = [1, 2, 3];
		expect(actual).toEqual(expected);
	});

	it("should return [1,4,3,2]", () => {
		const array = [1, 2, 3, 4];
		const actual = findThreeLargestNumbers(array);
		const expected = [2, 3, 4];
		expect(actual).toEqual(expected);
	});

	it("should return [12, 33, 56]", () => {
		const array = [5, 3, 12, 4, 56, 33];
		const actual = findThreeLargestNumbers(array);
		const expected = [12, 33, 56];
		expect(actual).toEqual(expected);
	});
});
