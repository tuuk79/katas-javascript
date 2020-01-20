function printWords(words, limit) {
  var remaining = limit;
  var line = "";

  for (var i = 0; i < words.length; i++) {
    // if no words exist, print blank line
    if (words.length === 0) {
      break;
    }

    // if one word provided and limit less than length of word, print blank line
    if (i === 0 && limit < words[i].length) {
      break;
    }

    //
    if (i === 0) {
      line += words[i];

      // update remaining allowed characters on line
      remaining = remaining - words[i].length;

      // if only one word, then print and stop
      if (words.length === 1) {
        break;
      }
    }

    // handle everything after first pass
    else {
      // if next word and hyphen can be added, then add to line
      // and deduct from remaining
      if (("-" + words[i]).length <= remaining) {
        line += "-" + words[i];
        remaining = remaining - ("-" + words[i]).length;

        // if no characters remaining, then print and stop
        if (remaining === 0) {
          break;
        }
      }

      // if cannot be added to line, then
      // print line
      // clear line
      // start new line
      // reset remaining to limit
      else {
        if (("-" + words[i]).length <= remaining) {
          line += "\n";
        }
      }
    }
  }

  return line;
}

describe("words on a line", () => {
  it("should print nothing with 0 limit", () => {
    var words = ["one"];
    var limit = 0;
    var result = printWords(words, limit);
    expect(result).toBe("");
  });

  it("should print nothing with 2 limit", () => {
    var words = ["one"];
    var limit = 2;
    var result = printWords(words, limit);
    expect(result).toBe("");
  });

  it("should print 'one'", () => {
    var words = ["one"];
    var limit = 15;
    var result = printWords(words, limit);
    expect(result).toBe("one");
  });

  it("should print 'one-two' with 8 limit", () => {
    var words = ["one", "two"];
    var limit = 8;
    var result = printWords(words, limit);
    expect(result).toBe("one-two");
  });

  it("should print 'one-two' and no 'three' with 9 limit", () => {
    var words = ["one", "two", "three"];
    var limit = 9;
    var result = printWords(words, limit);
    expect(result).toBe("one-two");
  });

  it("should print 'one-two-three' with 13 limit", () => {
    var words = ["one", "two", "three"];
    var limit = 13;
    var result = printWords(words, limit);
    expect(result).toBe("one-two-three");
  });

  it("should print 'one-two-three' with 15 limit", () => {
    var words = ["one", "two", "three"];
    var limit = 15;
    var result = printWords(words, limit);
    expect(result).toBe("one-two-three");
  });
});
