function createPhoneNumber(numbers){
  string = numbers.join('');
  return('(' + string.substr(0,3) + ') ' + string.substr(3,3) + '-' + string.substr(6));
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);