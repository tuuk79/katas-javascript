function printWords(words, limit) {
  var remaining = limit;
  var line = "";

  for (var i = 0; i < words.length; i++) {
    // console.log("processing...");
    // console.log(words[i]);
    if (!line.length) {
      line += words[i];
      remaining = remaining - words[i].length;
      if (words.length === 1) {
        console.log(line);
      }
    } else {
      var nextWord = "-" + words[i];
      if (nextWord.length <= remaining) {
        line += nextWord;
        remaining = remaining - nextWord.length;
        if (remaining === 0) {
          // console.log("no more chars left");
          console.log(line);
        } else {
          console.log(line);
          // console.log(remaining + " remaining");
        }
      } else {
        console.log(line);
        // console.log("going to next line");
        remaining = limit;
        // console.log("reset to " + remaining + " remaining");
        line = "";
        line += words[i];
        console.log(line);
      }
    }
  }
}

describe("words on a line", () => {
  it("should print 'one'", () => {
    console.log("should print 'one'");
    var words = ["one"];
    var limit = 15;
    printWords(words, limit);
  });

  it("should print 'one-two'", () => {
    console.log("should print 'one-two'");
    var words = ["one", "two"];
    var limit = 8;
    printWords(words, limit);
  });

  it("should print 'one-two' and no 'three'", () => {
    console.log("should print 'one-two' and no 'three'");
    var words = ["one", "two", "three"];
    var limit = 9;
    printWords(words, limit);
  });
});
