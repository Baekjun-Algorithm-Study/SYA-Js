let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let list = input[1].split(' ').map(Number); 

let max = list[0];
let min = list[0];

for(var i = 0; i < list.length; i++){
    if(max < list[i]){
        max = list[i];
    }else if(min > list[i]){
        min = list[i];    
    };
};

console.log(min, max);