function dist(v, mu) {	// suppose reaction time is 1
    return (( (v / 3.6)**2 ) / (2 * mu * 9.81)) + (v / 3.6);
}

function speed(d, mu) {	// suppose reaction time is 1
    return (Math.sqrt(1 + (2 * d / (mu * 9.81))) -1) * mu * 9.81 * 3.6;
}

console.log(dist(100, 0.7));
console.log(speed(83.9598760937531, 0.7));