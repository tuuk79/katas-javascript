function sum(arr) {
	return arr.reduce((prev, curr) => prev + curr, 0)
}

function insert(input, value, index) {
	input.splice(index,0,value)
	return input
}

describe('arrays', () => {
	it('should sum [1,2,3] to be 6', () => {
		const arr = [1,2,3]
		const expected = 6
		const result = sum(arr)
		expect(result).toEqual(expected)
	})

	it('should pop dohster from top/back', () => {
		const names = ["steve", "yoo", "dohster"]
		const actual = names.pop()
		const expected = "dohster"
		expect(actual).toBe(expected)
	})

	it('should insert 4 at index 1 resulting in [1,4,2,3]', () => {
		const input = [1,2,3]
		const actual = insert(input, 4, 1)
		const expected = [1,4,2,3]
		expect(actual).toEqual(expected)
	})

	it('should insert 5 at index 2 resulting in [1,2,5,3]', () => {
		const input = [1,2,3]
		const actual = insert(input, 5, 2)
		const expected = [1,2,5,3]
		expect(actual).toEqual(expected)
	})
})
