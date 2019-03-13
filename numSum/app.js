function GetSum( a,b ) {
  if (a - b === 0) {
    return a;
  } else if (a - b > 0){
    var temp = b;
    b = a;
    a = temp;
  }
  
  var sum = 0;
  for (var i = a; i <= b; i++) {
    sum = sum + i;
  }
  return sum
}
