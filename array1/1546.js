let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = input[0];
let grade = input[1].split(' ').map(Number);
let max = Math.max(...grade);
let sum = 0.0;
let avg = 0.0;

for(var i = 0; i < grade.length; i++){
    sum += (grade[i]/ max * 100);
}
avg = sum/grade.length
console.log(avg);




