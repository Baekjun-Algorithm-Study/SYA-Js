const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().split('\n');

let numbers = input[0].split(' ');
let result ='';
let newNum = [];

for(var i = 0; i < numbers.length; i++){
    
    let number = numbers[i]; 
 
    for(var j = 2; j >= 0; j--){
        result += number[j];
    }
   result += ' ';
}
newNum.push(result);

let str = newNum[0].split(' ').map(Number);

if(str[0] > str[1]){
    console.log(str[0]);
}else{
    console.log(str[1]);
}