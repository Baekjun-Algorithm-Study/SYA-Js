let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]); 

let xPoint = input.slice(1).map(ele => Number(ele.split(' ')[0]));
let yPoint = input.slice(1).map(ele => Number(ele.split(' ')[1]));

let minX = Math.min(...xPoint);
let maxX = Math.max(...xPoint);
let minY = Math.min(...yPoint);
let maxY = Math.max(...yPoint);

let result = (maxX - minX) * (maxY - minY);

console.log(result);

