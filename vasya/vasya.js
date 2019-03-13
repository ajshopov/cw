function tickets(peopleInLine){
  var tillBalance = 0;
  var expectedChange;
  for (var i = 0; i < peopleInLine.length; i++) {
    expectedChange = peopleInLine[i] - 25;
    console.log('person pays ' + peopleInLine[i])
    console.log('exp chg = ' + expectedChange)
    if (expectedChange > tillBalance){
      return "NO"
    } else {
      tillBalance = tillBalance + peopleInLine[i] - expectedChange;
      console.log('new tillBalance ' + tillBalance)
    }
  }
  return "YES"
}

console.log(tickets([25,25,50,50]));
console.log(tickets([25,25,50,100]));

function tickets(peopleInLine){
  var tillBills = [];
  for (var i = 0; i < peopleInLine.length; i++) {
    tillBills.push(peopleInLine[i])
  }
}