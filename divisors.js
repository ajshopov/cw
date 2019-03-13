function divisors(integer){
  var factors = []
  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) {
      factors.push(i)
    }
  }
  return factors.length === 0 ? `${i} is prime` : factors
}