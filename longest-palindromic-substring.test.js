function longestPalindromicSubstring(string) {
	let currentLongest = [0, 1];
	for (let i = 0; i < string.length; i++) {
		const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
		const even = getLongestPalindromeFrom(string, i - 1, i);
		const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
		currentLongest =
			currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
				? currentLongest
				: longest;
	}
	// have to add one to end of slice b/c not included
	return string.slice(currentLongest[0], currentLongest[1 + 1]);
}

function getLongestPalindromeFrom(string, leftIndex, rightIndex) {
	while (leftIndex >= 0 && rightIndex < string.length) {
		if (string[leftIndex] !== string[rightIndex]) break;
		leftIndex--;
		rightIndex++;
	}
	return [leftIndex + 1, rightIndex - 1];
}

describe("longest palindromic substring", () => {
	it("azfz should be zfz", () => {
		const string = "azfz";
		const expected = "zfz";
		const actual = longestPalindromicSubstring(string);
		expect(actual).toBe(expected);
	});
});
