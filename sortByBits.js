const sortByBit = array => {
  return array.sort((a, b) => {
    const bitA = a.toString(2).split('').map(Number).reduce((a, b) => a + b, 0);
    const bitB = b.toString(2).split('').map(Number).reduce((a, b) => a + b, 0);

    if (bitA < bitB) { return -1; }
    if (bitA > bitB) { return 1; }
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  })
}

let a = [3, 8, 3, 6, 5, 7, 9, 1];
console.log(sortByBit(a)); // [1, 8, 3, 3, 5, 6, 9, 7]