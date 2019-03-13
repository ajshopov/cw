function openOrSenior(data){
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      data.splice([i], 1, 'Senior')
    } else {
      data.splice([i], 1, 'Open')
    }
  }
  return data;
}


function openSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'senior' : 'open');
}


openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]);
openSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]);