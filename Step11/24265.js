let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0];

console.log(n*(n-1)/2);
console.log(2)