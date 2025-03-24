let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let number = Number(input[0]);
let num = [];

for(var i = 2; i <= number; i++){
    while(number % i === 0){
        number/=i
        num.push(i);
    }
    if(number === 1)
        break;
}
num.forEach((ele) => console.log(ele));