function longestSubstringWithoutDuplication(string) {
	let lastSeen = new Map();
	let longest = [0, 1];
	let starting = 0;

	for (let i = 0; i < string.length; i++) {
		if (!lastSeen.has(string[i])) {
			lastSeen.set(string[i], i);
		} else {
			// handle duplicate
			const lastPosition = lastSeen.get(string[i]);

			starting = Math.max(starting, lastPosition + 1);

			lastSeen.set(string[i], i);
		}

		if (i + 1 - starting > longest[1] - longest[0]) {
			longest = [starting, i + 1];
		}
	}

	return string.substr(longest[0], longest[1] - longest[0]);
}

describe("longest substring without duplication", () => {
	it("", () => {
		const string = "abba";
		const expected = "ab";
		const actual = longestSubstringWithoutDuplication(string);
		expect(actual).toBe(expected);
	});

	it("", () => {
		const string = "clementisacap";
		const expected = "mentisac";
		const actual = longestSubstringWithoutDuplication(string);
		expect(actual).toBe(expected);
	});

	it("", () => {
		const string = "abcdeabcdefc";
		const expected = "abcdef";
		const actual = longestSubstringWithoutDuplication(string);
		expect(actual).toBe(expected);
	});
});
