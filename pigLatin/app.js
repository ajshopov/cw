function pigIt(str){
  var words = str.split(' ')
  for (var i = 0; i < words.length; i++) {
    pigWord = words[i].split('');
    pigWord.push(pigWord.shift());
    pigWord.push('a');
    pigWord.push('y');
    words[i] = pigWord.join('');
  }
  str = words.join(' ');
  return str
}