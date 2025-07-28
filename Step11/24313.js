let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var [a1, a0] = input[0].split(' ').map(Number);
var C = Number(input[1]);
var N = Number(input[2]);

function result(a1, a0, C, N){
    for(let n = N; n <= 100; n++){
        if(a1 * n + a0 > C * n){
            return false;
        }
    }return true;
}
console.log(result(a1, a0, C, N) ? 1 : 0);