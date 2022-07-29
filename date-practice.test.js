describe('date practice', () => {
	it('should create a date', () => {
		const date = new Date()
		expect(date).not.toBeNull()
	})

	it('should check if a date is greater than another', () => {
		const d1 = new Date('1/1/2022')
		const d2 = new Date('1/2/2022')
		expect(d2 > d1).toBe(true)
	})

	it('should find the current day', () => {
		const date = new Date('1/1/2022')
		const day = date.toLocaleDateString('en-US', { weekday: 'long' })
		expect(day).toBe('Saturday')
	})

	it('should find the current day', () => {
		const date = new Date('1/1/2022')
		const day = date.toLocaleDateString('en-US', { weekday: 'short' })
		expect(day).toBe('Sat')
	})
})
