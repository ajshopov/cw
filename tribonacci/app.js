function tribonacci(signature,n){
  if (n < 4) {
    return signature.slice(0,n);
  }
  do {
    var l = signature.length;
    signature.push(signature[l-3] + signature[l-2] + signature[l-1]);
  } while (l < n - 1);
  return signature;
}

tribonacci([1, 2, 3], 10)