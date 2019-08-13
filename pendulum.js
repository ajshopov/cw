function pendulum(values) {
  values = values.sort((a, b) => a - b);
  let answer = [];
  for (let i = 0; i < values.length; i++) {
    (i % 2 === 0) ? answer.unshift(values[i]) : answer.push(values[i]);
  }
  return answer;
}