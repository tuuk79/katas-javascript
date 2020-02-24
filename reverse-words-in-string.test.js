// Given an input string, reverse the string word by word.

function reverseWords(input) {
  var splitted = input.split(/\s+/);
  var reverse = [];

  for (var i = splitted.length - 1; i >= 0; i--) {
    reverse.push(splitted[i]);
  }

  return reverse.join(" ");
}

describe("reverse words in a string", () => {
  it("should reverse the words", () => {
    var input = "the best       word   period";
    expect(reverseWords(input)).toBe("period word best the");
  });

  it("should reverse 'big bird' into 'bird big", () => {
    var input = "big bird";
    expect(reverseWords(input)).toBe("bird big");
  });

  it("should reverse '  hello world!  ' into 'world! hello", () => {
    var input = "  hello world!  ";
    expect(reverseWords(input)).toBe("world! hello");
  });

  it.only("should turn ' hello world ' into 'hello world'", () => {
    var input = " hello world ";
    console.log(input.replace(/\b\s\s\b/g, "-"));
  });
});
