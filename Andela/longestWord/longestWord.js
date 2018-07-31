function longest(sentence) {

  var substring = sentence.split(" ");
  var longest_word = '';
  for (var i = 0; i <= substring.length - 1; i++) {
    if (substring[i].length >= longest_word.length) {
      longest_word = substring[i];
    }
  }
  return longest_word;
}

longest("This is Andela computer");
