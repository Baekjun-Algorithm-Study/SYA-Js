let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = BigInt(input[0]);

console.log(`${(n * (n - 1n) * (n - 2n)) / 6n}`);
console.log(3);