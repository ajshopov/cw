function isValidWalk(walk) {
  var N = 0, S = 0, W = 0, E = 0;
  for (var i = 0; i < walk.length; i++) {
    switch(walk[i]){
      case 'n':
        N = N+1
        break;
      case 's':
        S = S+1
        break;
      case 'w':
        W = W+1
        break;
      case 'e':
        E = E+1
        break;
    }
  }
  return N === S && W === E && walk.length === 10
}


function bestPrac(walk){
  var N = walk.filter(dir => (dir === 'n')).length;
  var S = walk.filter(dir => (dir === 's')).length;
  var W = walk.filter(dir => (dir === 'w')).length;
  var E = walk.filter(dir => (dir === 'e')).length;

  return walk.length === 10 && N === S && W === E;
}

