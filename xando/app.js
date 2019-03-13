function XO(str) {
  var exs = (str.match(/[xX]/g) || []).length
  var ohs = (str.match(/[oO]/g) || []).length
  return exs === ohs ? true : false;
}


console.log(XO('xo'));
console.log(XO('xoxo'));
console.log(XO('123'));
console.log(XO('Oo'));