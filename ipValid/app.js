function isValidIP(str) {
  console.log(str)
  str = str.split('.')
  if (str.length !== 4) {
    return false
  }
  for (var i = 0; i < str.length; i++) {


    console.log(str[i])
    console.log(Number(str[i]))
    if (str[i][0] ==='0' && str[i].length > 1) {
      return false
    }
    if (str[i].match(/\s/)) {
      return false
    }
    if (Number(str[i]) > 255 || Number(str[i]) < 0 || isNaN(Number(str[i]))) {
      return false
    }
  }
  return true
}