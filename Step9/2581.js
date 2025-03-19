let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let start = Number(input[0]);
let end = Number(input[1]);
let prime = [];

for(var i = start; i <= end; i++){
    let divisors = [];
    if(i != 1){
        for(var j = 0; j <= i; j++){
            if(i % j == 0){
                divisors.push(j);
            }
        }if(divisors.length <= 2){
            prime.push(i);
        }
    }
}

if(prime.length == 0){
    console.log(-1)
}else{
    let sum = 0;
    let min = prime[0];
    for(var k = 0; k < prime.length; k++){
        sum += prime[k];
        if(min > prime[k]){
            min = prime[k];
        }
    }
    console.log(sum);
    console.log(min);
}