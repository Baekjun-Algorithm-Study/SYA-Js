let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let student = input.map(Number);

let arr = [];

for(var i = 1; i <= 30; i++){
    if(student.includes(i)) continue;
    arr.push(i);
}
arr.sort((a, b) => a - b);
console.log(arr.join('\n'));

