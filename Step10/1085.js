const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().split('\n');

let [x, y, w, h] = input[0].split(' ').map(Number);

const result = Math.min(x, w - x, y, h - y);

console.log(result);