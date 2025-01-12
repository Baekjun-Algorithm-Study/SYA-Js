const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().trim().split('\n');

let len = input.map(x => x.length);
let maxLen = Math.max(...len);
let string = "";

for(var i = 0; i < maxLen; i++){
    for(var j = 0; j < input.length; j++){
       string += input[j][i] || ""; 
    }
}

console.log(string);