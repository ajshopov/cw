function findMissingLetter(array) {
  const ascii = array.map(element => element.charCodeAt());
  for (let i = 0; i < ascii.length; i++) {
    if (ascii[i+1] - ascii[i] !== 1) {
      return String.fromCharCode(ascii[i]+1);
    }
  }
  throw new Error('invalid input')
}


console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])) // e