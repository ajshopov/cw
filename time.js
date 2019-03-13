function humanReadable(seconds) {
  var hours = 0;
  var mins = 0;
  var secs = 0;
  if (seconds < 60) {
    secs = seconds;
  } else if (seconds < 3600) {
    secs = seconds % 60;
    mins = (seconds - secs) / 60;
  } else {
    secs = seconds % 60;
    mins = (seconds - secs) % 3600 / 60;
    hours = Math.floor(seconds / 3600);
  }
  return ('0' + hours).slice(-2) + ':' + ('0' + mins).slice(-2) + ':' + ('0' + secs).slice(-2);
}