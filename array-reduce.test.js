describe('array reduce', () => {
    it('should be true', () => {
        expect([1, 2, 3].reduce((acc, val) => acc + val, 0)).toBe(6)
    });
})
