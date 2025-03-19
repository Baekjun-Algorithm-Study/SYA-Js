let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let length = Number(input[0]);
let number = input[1].split(' ').map(Number);
let prime = [];

for(var i = 0; i < length; i++){
    if(number[i] != 1){
        let divisors = [];
        for(var j = 0; j <= number[i]; j++){
            if(number[i] % j == 0){
                divisors.push(j);
            }
        }
       if(divisors.length <= 2){
        prime.push(number[i]);
       }
    }    
}
console.log(prime.length);