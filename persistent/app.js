function persistence(num) {
  var count = 0;
  while (num > 9) {
    num = num.toString().split('').reduce((a,b) => a * b);
    count++
  }
  return count;
}


persistence(39)