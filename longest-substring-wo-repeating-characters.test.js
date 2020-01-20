function getSubstring(input) {
  var input = input.toString();
  var temp = [];
  var longest = 0;

  for (var i = 0, j = 0; i < input.length; i++) {
    if (!input) {
      return;
    }

    if (!temp.includes(input.charAt(i))) {
      temp.push(input.charAt(i));
      if (temp.length > longest) {
        longest = temp.length;
      }
    } else {
      if (temp.length > longest) {
        longest = temp.length;
      }
      temp = [];
      j++;
      i = j - 1;
    }

    // on last iteration, move j to next starting point
    if (i == input.length - 1) {
      j++;
      i = j - 1;
    }
  }

  return longest;
}

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
