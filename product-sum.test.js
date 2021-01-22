function productSum(array, level = 1) {
	let sum = 0;

for(const element of array) {
	if (Array.isArray(element)) {
		sum += productSum(element, level + 1);
	} else {
		sum += element;
	}
}
	return sum * level;
}

describe("product sum", () => {
	it("should return 1", () => {
		const array = [1];
		const expected = 1;
		const actual = productSum(array);
		expect(actual).toEqual(expected);
	});

	it("should return 3", () => {
		const array = [1, 2];
		const expected = 3;
		const actual = productSum(array);
		expect(actual).toEqual(expected);
	});

	it("should return 5", () => {
		const array = [1, [2]];
		const expected = 5;
		const actual = productSum(array);
		expect(actual).toEqual(expected);
	});
});
