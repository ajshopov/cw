function findOdd(A) {
  A.sort((a, b) => a-b);
  for (var  i = 0;  i < A.length;  i++) {
    if (A[i] === A[i+1]){
      A.splice(i, 2);
      i--;
    }
  }
  return A[0];
}

