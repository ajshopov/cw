function solution(number){
  var multiples = [];
  for (var i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0){
      multiples.push(i);
    }
  }
  var sum = multiples.reduce((a, b) => a + b, 0);
  return sum
}


// function solution(number) {
//   var sum = 0;
//   for (var i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i
//     }
//   }
//   return sum
// }