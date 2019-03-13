function nextBigger(n){
  arr = n.toString().split('').map(Number);
  arr.sort((a, b) => a - b);
  console.log(arr);
  console.log(n);

  for (var i = 1; i < 10000000; i++) {
    
    var testNum = n + i;
    var checker = testNum.toString().split('').map(Number).sort((a, b) => a - b);
    // console.log(checker)
    if (checker.toString() === arr.toString()) {
      // console.log('found match')
      return testNum;
    }
  }
  return -1;
}
