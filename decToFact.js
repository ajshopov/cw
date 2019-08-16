function dec2FactString(nb) {
  let quotient = 1, divider = 1, remainder = 0;
  let answer = [];
  while (quotient > 0) {
    remainder = nb % divider;
    if (remainder >= 10) { remainder = String.fromCharCode(remainder + 55); }
    answer.unshift(remainder);
    quotient = Math.floor(nb / divider);
    nb = quotient;
    divider++;
  }
  return answer.join('');
}

function factString2Dec(str) {
  return str.split('')
          .map((num, index) => parseInt(num, 10) * factorial((str.length - index - 1)))
          .reduce((a,b) => a + b);
}

function factorial(n) {
  return n ? n * factorial(n-1) : 1;
}


console.log(dec2FactString(463)) // "341010"
console.log(factString2Dec('341010')) // "463"



// For example, 46310 can be transformed into a factorial representation by these successive divisions:

// 463 ÷ 1 = 463, remainder 0
// 463 ÷ 2 = 231, remainder 1
// 231 ÷ 3 = 77, remainder 0
// 77 ÷ 4 = 19, remainder 1
// 19 ÷ 5 = 3, remainder 4
// 3 ÷ 6 = 0, remainder 3
// The process terminates when the quotient reaches zero.Reading the remainders backward gives 341010!.

// 463 = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0! 