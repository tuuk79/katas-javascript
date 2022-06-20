function sum(arr) {
	return arr.reduce((prev, curr) => prev + curr, 0)
}

describe('arrays', () => {
	it('should sum [1,2,3] to be 6', () => {
		const arr = [1,2,3]
		const expected = 6
		const result = sum(arr)
		expect(result).toEqual(expected)
	})
})
