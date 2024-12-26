let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

/* 방식 1 */
let N = input[0].split(' ').map(Number);
let list = input[1].split(' ').map(Number);
let X = N[1];

console.log(list.filter((ele) => ele < X).join(' '));

/* 방식 2 */
let N2 = input[0].split(' ').map(Number);
let list2 = input[1].split(' ').map(Number);

console.log(list2.filter((ele) => ele < N2[1]).join(' '));
