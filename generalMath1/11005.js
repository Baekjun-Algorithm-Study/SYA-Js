let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0].split(' ')[0]);
let decimal = Number(input[0].split(' ')[1]);
let result = number.toString(decimal);

console.log(result.toUpperCase());