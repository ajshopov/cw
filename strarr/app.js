function longestConsec(strarr, k) {
  var size = 0;
    for (var i = 0; i < strarr.length; i++) {
      if (strarr[i].length + strarr[i+1].length > size){
        size = strarr[i].length + strarr[i+1].length
      }
    }
  return size
}