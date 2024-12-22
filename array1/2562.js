let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let numbers = input.map(Number);

let max = numbers[0];
let num = 1;

for(var i = 0; i < numbers.length; i++){
    if(max < numbers[i]){
        max = numbers[i]
        num = i+1;
    }
}

console.log(max);
console.log(num);
