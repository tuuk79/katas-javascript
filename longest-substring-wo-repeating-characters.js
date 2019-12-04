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

module.exports.getSubstring = getSubstring;
