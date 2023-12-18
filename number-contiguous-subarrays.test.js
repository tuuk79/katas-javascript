const getSubarrays = (input,m,k) => {
    let start = 0
    let end = m
    let result = 0

    while (end <= input.length) {
        let exit = false

        // print subarrays first
        const sub = input.slice(start, end)

        for (let i = 0; i < sub.length; i++) {
            const diff = k - sub[i]

            for (let j = 1; j < sub.length; j++) {
                if (sub.includes(diff)) {
                    result++
                    exit = true

                    if (exit) break;
                }
            }

            if (exit) break;
        }

        start++
        end++
    }

    return result
}

describe('number of contiguous subarrays', () => {
    it('should return 1', () => {
        const input = [1,2,3,4,6]
        const m = 4
        const k = 10
        const actual = getSubarrays(input, m, k)
        const expected = 1
        expect(actual).toEqual(expected)
    })

    it('should return 2', () => {
        const input = [1,7,3,4,6]
        const m = 4
        const k = 10
        const actual = getSubarrays(input, m, k)
        const expected = 2
        expect(actual).toEqual(expected)
    })

    it('should return 4', () => {
        const input = [1,7,3,4,6,9]
        const m = 4
        const k = 10
        const actual = getSubarrays(input, m, k)
        const expected = 3
        expect(actual).toEqual(expected)
    })
})