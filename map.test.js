describe('javascript map', () => {
	it('should create a map', () => {
		const map = new Map()
		expect(map).not.toBeNull()
	})

	it('should take an object', () => {
		const map = new Map()
		map.set('name','steve')
		expect(map.size).toEqual(1)
	})

	it('should parse and object of objects', () => {
		const input = {
			1: { 'name': 'steve' }
		}

		console.log(input[1]['name'])
	})
})
