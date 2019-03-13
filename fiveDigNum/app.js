function solution(digits){
  digits = digits.split('')
  var highestNum = 0
  // cycle through number
  for (var i = 0; i < digits.length - 4; i++) {
    //select 5 digit number
    var testNum = digits[i] + digits[i+1] + digits[i+2] + digits[i+3] + digits[i+4]
    console.log(testNum)
    if (testNum > highestNum) {
      highestNum = Number(testNum)
    }
  }
  return highestNum
}

console.log(solution('1234567898765'))



function solution(digits){
  digits = digits.split('')
  var highestNum = 0
  for (var i = 0; i < digits.length - 4; i++) {
    var testNum = digits[i] + digits[i+1] + digits[i+2] + digits[i+3] + digits[i+4]
    if (testNum > highestNum) {
      highestNum = Number(testNum)
    }
  }
  return highestNum
}