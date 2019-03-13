function isPangram(string){
  sentence = string.toLowerCase().replace(/\W/g, '').split('');
  test = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (var i = 0; i < test.length; i++) {
    if (sentence.indexOf(test[i]) == -1){
      return false;
    }
  }
  return true;
}

isPangram("The quick brown fox jumps over the lazy dog.");
isPangram("This is not a pangram.");
