let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let numbers = input[1];
let sum = 0;

for(var i = 0; i < numbers.length; i++){
    sum += Number(numbers[i]);    
}
console.log(sum);