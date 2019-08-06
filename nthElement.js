function every(arr, interval = 1, start = 0) {
  return arr.filter((element, index) => {
    return (index - start) % interval === 0 && (index - start) >= 0
  })
}


// Create a method(JS: function) every which returns every nth element of an array.

//   Usage
// With no arguments, array.every it returns every element of the array.
// With one argument, array.every(interval) it returns every intervalth element.
// With two arguments, array.every(interval, start_index) it returns every intervalth element starting at index start_index