function findOutlier(integers){
  var evenArr = []
  var oddArr = []
  for (var i = 0; i < integers.length; i++) {
    integers[i] % 2 == 0 ? evenArr.push(integers[i]) : oddArr.push(integers[i]);
  }
  return oddArr.length == 1 ? oddArr[0] : evenArr[0];
}