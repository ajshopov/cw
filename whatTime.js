var getMilitaryTime = function (input) {
  const time = input.substr(0, 8).split(':');
  time[0] = parseInt(time[0]);

  if (input.slice(-2) === 'PM') {
    if (time[0] != 12) { time[0] += 12 }
  } else {
    time[0] = ("0" + time[0] % 12).slice(-2);
  }
  return time.join(':')
};

console.log(getMilitaryTime('12:00:01AM'))
console.log(getMilitaryTime('11:46:47PM'))

// Given a time in AM / PM format as a string, 
// convert it to military(24 - hour) time as a string.

// Midnight is 12: 00: 00AM on a 12 - hour clock,
// and 00: 00: 00 on a 24 - hour clock.Noon is 12: 00: 00PM 
// on a 12 - hour clock, and 12: 00: 00 on a 24 - hour clock

// Sample Input: 07: 05: 45PM Sample Output: 19: 05: 45

// BestSolution
var militaryTime = function (input) {
  const hour = input.substr(0,2);
  const min = input.substr(3,2);
  const sec = input.substr(6,2);
  const phase = input.substr(-2,2);

  if (phase === 'AM' && hour == 12) {
    return `00:${min}:${sec}`;
  } else if (phase === 'PM' && hour != 12){
    return `${parseInt(hour)+12}:${min}:${sec}`;
  } else {
    return `${hour}:${min}:${sec}`;
  }
}

