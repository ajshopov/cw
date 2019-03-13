function list(names){
  nameArr = [];
  for (var i = 0; i < names.length; i++) {
    nameArr.push(names[i].name);
  }
  if (nameArr.length > 1) {
    return nameArr.slice(0,-1).join(', ') + ' & ' + nameArr[nameArr.length -1];
  } else {
    return nameArr.join('');
  }
}


list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
list([ {name: 'Bart'}])