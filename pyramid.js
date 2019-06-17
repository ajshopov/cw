let right = [5,2,1];

for (let j = right.length-1; j >= 0; j--) {
  for (let i = 0; i < j; i++) {
    right[i] = right[i]- right[i+1];
  }
}
console.log(right);



// Upside - Down Pyramid Addition is the process of taking a list of numbers and consecutively adding them together until you reach one number.

// When given the numbers 2, 1, 1 the following process occurs:

// 2   1   1
//   3   2
//     5
// This ends in the number 5.

// YOUR TASK
// Given the right side of an Upside - Down Pyramid(Ascending), write a function that will return the original list.

//   EXAMPLE
// reverse([5, 2, 1]) => [2, 1, 1]
// NOTE: The Upside - Down Pyramid will never be empty and will always consist of positive integers ONLY.