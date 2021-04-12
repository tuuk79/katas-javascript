function firstNonRepeatingCharacter(string) {
	const map = new Map();
	for (let i = 0; i < string.length; i++) {
		if (map.has(string[i])) {
			let existing = map.get(string[i]);
			existing++;
			map.set(string[i], existing);
		} else {
			map.set(string[i], 1);
		}
	}

	for (let j = 0; j < string.length; j++) {
		if (map.get(string[j]) === 1) return j;
	}

	return -1;
}

describe("first non-repeating character", () => {
	it("aab should return index 2", () => {
		const string = "aab";
		const expected = 2;
		const actual = firstNonRepeatingCharacter(string);
		expect(actual).toBe(expected);
	});

	it("aabbbaaii should return -1", () => {
		const string = "aabbb";
		const expected = -1;
		const actual = firstNonRepeatingCharacter(string);
		expect(actual).toBe(expected);
	});

	it("aabbcccd should return 7", () => {
		const string = "aabbcccd";
		const expected = 7;
		const actual = firstNonRepeatingCharacter(string);
		expect(actual).toBe(expected);
	});

	it("abbc should return 0", () => {
		const string = "abbc";
		const expected = 0;
		const actual = firstNonRepeatingCharacter(string);
		expect(actual).toBe(expected);
	});
});
