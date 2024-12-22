let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let numbers = input.map(Number);
let count = 0;
let isFalse = false;
let num = Array(10);

for(var i = 0; i < numbers.length; i++){
   num[i] =  numbers[i] % 42;
}  
for(var i = 0; i < 10; i++){
    isFalse = false;
    for(var j = i + 1; j < 10; j++ ){
        if(num[i] == num[j]){
            isFalse = true;
            break;
            }
    }
    if(isFalse == false){
        count++;
    }
}
console.log(count);