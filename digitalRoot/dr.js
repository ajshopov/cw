function digital_root(n) {
  while (n.toString().length > 1) {
    n = n.toString().split('').reduce(function(a,b){ return parseInt(a) + parseInt(b)}, 0);
  }
  return n;
}