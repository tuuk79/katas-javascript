function getSubstring(input) {
  var input = input.toString();
  var temp = [];
  var longest = 0;

  for (var i = 0; i < input.length; i++) {
    if (!input) {
      return;
    }

    if (!temp.includes(input[i])) {
      temp.push(input[i]);
      if (temp.length > longest) {
        longest = temp.length;
      }
    } else {
      // reset temp array
      temp = [];
      temp.push(input[i]);

      if (temp.length > longest) {
        longest = temp.length;
      }
    }
  }

  return longest;
}

module.exports.getSubstring = getSubstring;
