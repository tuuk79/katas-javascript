function findThreeLargestNumbers(array) {
	if (array.length < 4) return array;
	const result = [];
	for (let a of array) {
		if (result > 0) {
			for (let i = 0; i < result.length; i++) {
				if (a < array[i]) {
					result.unshift(a);
					break;
				} else {
					result.splice(i + 1, 0, a);
				}
			}
		} else {
			result.push(a);
		}
	}

	return result;
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
		console.log(actual);
		const expected = [1, 2, 3, 4];
		console.log(expected);
		expect(actual).toEqual(expected);
	});
});
