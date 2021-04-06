function isPalindrome(word) {
	let leftIndex = 0;
	let rightIndex = word.length - 1;

	while (leftIndex < rightIndex) {
		if ( word[leftIndex] !== word[rightIndex] ) return false;

		leftIndex++;
		rightIndex--;
	}

	return true;
}

describe('palindrome check', () => {
	it('a should return true', () => {
		const word = "a";
		const expected = true;
		const actual = isPalindrome(word);
		expect(actual).toBe(expected);
	});
	
	it('ab should return false', () => {
		const word = "ab";
		const expected = false;
		const actual = isPalindrome(word);
		expect(actual).toBe(expected);
	});

	it('aba should return true', () => {
		const word = "aba";
		const expected = true;
		const actual = isPalindrome(word);
		expect(actual).toBe(expected);
	});

	it('abcba should return true', () => {
		const word = "abcba";
		const expected = true;
		const actual = isPalindrome(word);
		expect(actual).toBe(expected);
	});
	
	it('abccccba should return true', () => {
		const word = "abccccba";
		const expected = true;
		const actual = isPalindrome(word);
		expect(actual).toBe(expected);
	});

	it('abda should return false', () => {
		const word = "abda";
		const expected = false;
		const actual = isPalindrome(word);
		expect(actual).toBe(expected);
	});
});
