function getAllPossiblePairs(input) {
	let pairs = []
	for (let i = 0; i < input.length; i++) {
		for (let j = i; j < input.length; j++) {
			pairs.push([input[i], input[j]])
		}
	}

	console.log(pairs)
	return pairs
}

describe('get all possible pairs', () => {
	it('should list [1,1]', () => {
		const given = [1]
		const actual = getAllPossiblePairs(given)
		const expected = [1,1]
		expect(actual).toEqual(expected)
	})

	it('should list [[1,1], [1,2], [2,2]', () => {
		const given = [1,2]
		const actual = getAllPossiblePairs(given)
		const expected = [[1,1],[1,2],[2,2]]
		expect(actual).toEqual(expected)
	})
})
