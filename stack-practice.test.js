const Stack = () => {
	const value = []
	const isEmpty = () => {
		return value.length === 0 
	}
	return {
		value,
		isEmpty
	} 
}

describe('stack', () => {
	it('should create a stack and return an empty array', () => {
		const stack = Stack()
		expect(stack.value).toStrictEqual([])
	})

	it('should have one item in the stack after pushing an item onto it', () => {
		const stack = Stack()
		stack.value.push(1)
		expect(stack.value.length).toEqual(1)
	})

	it('should return true if stack if empty', () => {
		const stack = Stack()
		const actual = stack.isEmpty()
		expect(actual).toBe(true)
	})

})
