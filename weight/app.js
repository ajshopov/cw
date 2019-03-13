function orderWeight(strng) {
  strng = strng.split(' ');

  strng.sort(function(x,y){
    return x.split('').reduce((a,b) => +a + +b) - y.split('').reduce((a,b) => +a + +b);
    
  });
  console.log(strng)

  for (var i = 0; i < strng.length - 1; i++) {
    if(strng[i].split('').reduce((a,b) => +a + +b) === strng[i+1].split('').reduce((a,b) => +a + +b)){
      var test = [strng[i], strng[i+1]]
      test.sort()
      strng.splice(i, 2, test[0], test[1]);
    }
  }
  return strng.join(' ');
}



  return strng.sort(function(p1, p2){
    if (p1.split('').reduce(function(a,b){return +a + +b}) == p2.split('').reduce(function(a,b){return +a + +b})){
      // var test = [p1, p2]
      // // debugger
      // if (('a'+p1).localeCompare('a'+p2) < 0) {
        // debugger
        console.log(p1)
        console.log(p1.charAt(0))
        console.log(p2)
        console.log(p2.charAt(0))
        if(Number(p1.charAt(0)) <  Number(p2.charAt(0))){

        return p1
      } else {
        return p2
      }

      // return test[1] - test[0]
      // debugger
      // return p1.toString() - p2.toString()
    } else {
      return p1.split('').reduce(function(a,b){return +a + +b}) - p2.split('').reduce(function(a,b){return +a + +b});
    }
  }).join(' ');

  // strng.join(' ');
}



  // for (var i = 0; i < strng.length; i++) {
  //   console.log(strng[i].split('').reduce(function(a,b){return +a + +b}));
  //   // var count = 0
  //   // for (var digits = 0; digits < strng[i].length; digits++) {
  //   //   count = count + Number(strng[i].charAt(digits))
  //   // }
  //   // console.log(count);
  // }
