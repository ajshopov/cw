const adjacentElementsProduct = (array) => {
  return Math.max(...array.map((element, index) => {
    return element * array[index + 1];
  }).slice(0, -1));
}


console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])); // 30