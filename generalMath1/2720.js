let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let caseCount = Number(input[0]);
let caseArr = [];
input.slice(1).forEach(ele => caseArr.push(ele));

let Quarter = 25;
let Dime = 10;
let Nickel = 5;
let Penny = 1;

let Q = 0;
let D = 0;
let N = 0;
let P = 0;

let money = [Quarter, Dime, Nickel, Penny];

for(var i = 0; i < caseCount; i++){ 
    for(var j = 0; j  < money.length; j++){
        
        Q = parseInt(caseArr[i] / Quarter);
        D = parseInt((caseArr[i] - (Q * Quarter)) / Dime);
        N = parseInt((caseArr[i] - ( (Q * Quarter)+(D * Dime) )) / Nickel);
        P = parseInt((caseArr[i] - ( (Q * Quarter)+(D * Dime)+(N * Nickel) )) / Penny);
    }
    console.log(Q, D, N, P)
}
