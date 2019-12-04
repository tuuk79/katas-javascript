var getSubstring = require("./longest-substring-wo-repeating-characters")
  .getSubstring;

test("a should return 1", () => {
  var input = ["a"];

  var result = getSubstring(input);
  expect(result).toBe(1);
});

test("ab should return 2", () => {
  var input = ["ab"];

  var result = getSubstring(input);
  expect(result).toBe(2);
});

test("abab should return 2", () => {
  var input = ["abab"];

  var result = getSubstring(input);
  expect(result).toBe(2);
});

test("ababc should return 3", () => {
  var input = ["ababc"];

  var result = getSubstring(input);
  expect(result).toBe(3);
});

test("abcab should return 3", () => {
  var input = ["abcab"];

  var result = getSubstring(input);
  expect(result).toBe(3);
});

test("abcdefab should return 6", () => {
  var input = ["abcdefab"];

  var result = getSubstring(input);
  expect(result).toBe(6);
});

test("bbbbb should return 1", () => {
  var input = ["bbbbb"];

  var result = getSubstring(input);
  expect(result).toBe(1);
});

test("pwwkew should return 3", () => {
  var input = ["pwwkew"];

  var result = getSubstring(input);
  expect(result).toBe(3);
});

test("dvdf should return 3", () => {
  var input = ["dvdf"];

  var result = getSubstring(input);
  expect(result).toBe(3);
});
