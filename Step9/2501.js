let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let[a, b] = input[0].split(' ').map(Number);

function getDivisors(a){
    let divisors = [];
    let k;
    for(var i = 0; i <= a; i++){
        if(a % i == 0){
            divisors.push(i);
        } 
    }
    if(divisors.length >= b){
        k = divisors[b-1];
    }else if(divisors.length < b){
        k = 0;
    }
    return k;
}

console.log(getDivisors(a));