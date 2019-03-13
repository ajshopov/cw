function getCount(str) {
  var vowelsCount = 0; 
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/g) !== null) {
      vowelsCount++
    }
  }
  return vowelsCount;
}