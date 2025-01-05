let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let all = input[0].split(' ');

let one = all.slice(0, 2).map(Number);
let two = all.slice(2, 5).map(Number);
let three = all.slice(5, 6).map(Number);

let max1 = 1;
let max2 = 2;
let max3 = 8;

let result = [];

for(var i = 0; i < one.length; i++){
    if(one[i] == max1){
        result.push(0);
    }else {
        result.push(max1 - one[i]);
    }
}

for(var i = 0; i < two.length; i++){
    if(two[i] == max2){
        result.push(0);
    }else {
        result.push(max2 - two[i]);
    }
}

if(three == max3){
    result.push(0);
}else{
    result.push(max3 - three);
}

console.log(result.join(' '));