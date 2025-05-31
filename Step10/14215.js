const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().split('\n');

let triangle = input[0].split(' ').map(Number);

let max = Math.max(...triangle);
let maxIndex = triangle.indexOf(max);
let others = triangle.slice(0, maxIndex).concat(triangle.slice(maxIndex + 1));
let sumWithoutMax = others.reduce((x, y) => x + y, 0);

let sum = 0

if(max < sumWithoutMax){
    sum = triangle.reduce((a, b) => a + b, 0);
}else {
    sum = sumWithoutMax * 2 - 1;
}
console.log(sum);