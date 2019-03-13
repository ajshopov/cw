var moveZeros = function (arr) {

  var zerosArray = []


  arr.forEach((item, index) => {
    if (item === 0) {
      zerosArray = zerosArray.concat(item)
    }
  })


  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === 0){
  //     zerosArray = zerosArray.concat(arr.slice(i,i+1))
  //   }
  // }



  arr = arr.filter(item => item !== 0)
  return arr.concat(zerosArray)
}

moveZeros([1,2,0,1,0,1,0,3,0,1]);
moveZeros([ 9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ]);