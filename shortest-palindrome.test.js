// Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

// Example 1:

// Input: "aacecaaa"
// Output: "aaacecaaa"
// Example 2:

// Input: "abcd"
// Output: "dcbabcd"

function getShortestPalindrome(input) {
	if (input.length === 1) return input;

}

describe("shortest palindrome", () => {
  it("should return a", () => {
    var input = "a";
    var result = getShortestPalindrome(input);
    expect(result).toBe("a");
  });

  it("should return aba", () => {
    var input = "aba";
    var result = getShortestPalindrome(input);
    expect(result).toBe("aba");
  });
});
