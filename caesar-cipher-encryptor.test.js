function caesarCipherEncryptor(string, key) {
	key = key % 26;
	const newLetters = [];

	for (let i = 0; i < string.length; i++) {
		const nlc = string[i].charCodeAt() + key;

		if (nlc <= 122) {
			newLetters.push(String.fromCharCode(nlc));
		} else {
			newLetters.push(String.fromCharCode(96 + nlc % 122));
		}
	}

	return newLetters.join('');
}

describe('caesar cipher encryptor', () => {
	it('ab with key of 2 should be cd', () => {
		const string = "ab";
		const key = 2;
		const expected = "cd";
		const actual = caesarCipherEncryptor(string, key);
		expect(actual).toBe(expected);
	});
	
	it('ace with key of 3 should be dfh', () => {
		const string = "ace";
		const key = 3;
		const expected = "dfh";
		const actual = caesarCipherEncryptor(string, key);
		expect(actual).toBe(expected);
	});

	it('z with key of 1 should be a', () => {
		const string = "z";
		const key = 1;
		const expected = "a";
		const actual = caesarCipherEncryptor(string, key);
		expect(actual).toBe(expected);
	});

	it('zz with key of 2 should be bb', () => {
		const string = "zz";
		const key = 2;
		const expected = "bb";
		const actual = caesarCipherEncryptor(string, key);
		expect(actual).toBe(expected);
	});

	it('xyz with key of 54 should be zab', () => {
		const string = "xyz";
		const key = 54;
		const expected = "zab";
		const actual = caesarCipherEncryptor(string, key);
		expect(actual).toBe(expected);
	});
});
