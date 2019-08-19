function generateDiagonal(n, l) {
  let result = [];
  for (let i = 0; i < l; i++) {
    result.push(combination(i + n, n))
  }
  return result;
}

function combination(n, k) {
  return Math.round(factorial(n) / (factorial(k) * factorial(n - k)));
}

function factorial(a) {
  return a ? a * factorial(a - 1) : 1;
}


console.log(generateDiagonal(2, 5)) // [1, 3, 6, 10, 15]