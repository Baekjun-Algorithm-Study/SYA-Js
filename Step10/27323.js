const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);

console.log(a*b);