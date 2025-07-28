let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = BigInt(input[0]);

console.log(`${n*n*n}`);
console.log(3);