function dirReduc(arr){
  console.log(arr)
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] == 'NORTH' && arr[i+1] == 'SOUTH' ||
      arr[i] == 'SOUTH' && arr[i+1] == 'NORTH' ||
      arr[i] == 'WEST' && arr[i+1] == 'EAST' ||
      arr[i] == 'EAST' && arr[i+1] == 'WEST'){
      // debugger
      arr.splice(i, 2)
      console.log(arr)
      i = -1;
    }
  }
  console.log(arr);
}



dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);