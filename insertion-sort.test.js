const insertionSort = (input) => {
    if (input?.length === 0) return []

    const output = []

    for (let i = 1; i < input.length; i++) {
        let prevIndex = i - 1
        if (input[prevIndex] > input[i]) {
            output[i] = input[prevIndex]
            output[prevIndex] = input[i]
        }

        // go back to out of order index
        // while ()
    }

    return input
}

describe('insertion sort', () => {
    it('should return []', () => {
        const input = []
        const actual = insertionSort(input)
        const expected = []
        expect(actual).toEqual(expected)
    })

    it('should return [123]', () => {
        const input = [3,2,1]
        const actual = insertionSort(input)
        const expected = [1,2,3]
        expect(actual).toEqual(expected)
    })
})