// function accum(s) {
//   var finalString = '';
//   for (var i = 0; i < s.length; i++) {
//     var temp = s.toUpperCase().charAt(i);
//     var lowerCase = temp.toLowerCase().repeat(i)
//     var output = temp.concat(lowerCase);
//     if (i < s.length - 1) {
//       output = output.concat('-')
//     }
//     finalString = finalString.concat(output)
//   }
  
// return(finalString)
// }

function accum(s) {
  var finalString = '';
  for (var i = 0; i < s.length; i++) {
    var letter = s.charAt(i);
    var loopOutput = letter.toUpperCase().concat(letter.toLowerCase().repeat(i));
    if (i < s.length - 1) {
      loopOutput = loopOutput.concat('-')
    }
    finalString = finalString.concat(loopOutput)
  }
return(finalString)
}