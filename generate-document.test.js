function generateDocument(characters, document) {
	let counts = new Map();

	for (let i = 0; i < characters.length; i++) {
		if (!counts.has(characters[i])) {
			counts.set(characters[i], 1);
		} else {
			let existing = counts.get(characters[i]);
			existing++;
			counts.set(characters[i], existing);
		}
	}

	for (let j = 0; j < document.length; j++) {
		if (!counts.has(document[j])) {
			return false;
		} else {
			let existing = counts.get(document[j]);
			if (existing > 0) {
				existing--;
				counts.set(document[j], existing);
			} else {
				return false;
			}
		}
	}

	return true;
}

describe("generate document", () => {
	it('should be true if given "abc" to generate "cba"', () => {
		const characters = "abc";
		const document = "cba";
		const expected = true;
		const actual = generateDocument(characters, document);
		expect(actual).toBe(expected);
	});

	it('should be false if given "a" to generate "cba"', () => {
		const characters = "a";
		const document = "cba";
		const expected = false;
		const actual = generateDocument(characters, document);
		expect(actual).toBe(expected);
	});

	it('should be true if given "hamburgre" to generate "hamburger"', () => {
		const characters = "hamburgre";
		const document = "hamburger";
		const expected = true;
		const actual = generateDocument(characters, document);
		expect(actual).toBe(expected);
	});

	it('should be false if given "ab" to generate "abcc"', () => {
		const characters = "ab";
		const document = "abcc";
		const expected = false;
		const actual = generateDocument(characters, document);
		expect(actual).toBe(expected);
	});

	it('should be false if given "aheaolabbhb" to generate "hello"', () => {
		const characters = "aheaolabbhb";
		const document = "hello";
		const expected = false;
		const actual = generateDocument(characters, document);
		expect(actual).toBe(expected);
	});
});
