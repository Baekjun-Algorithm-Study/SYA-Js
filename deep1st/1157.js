let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let word = input[0].toLowerCase();
let frequency = {};

for(let char of word){
    if(frequency[char]){
        frequency[char]++;
    }else{
        frequency[char] = 1;
    }
}

let max = Math.max(...Object.values(frequency));
let maxChar;
let maxCount = 0;

for(let char in frequency){
    if(frequency[char] == max){
        maxCount++
        maxChar = char.toUpperCase();
    };
}
if(maxCount > 1){
    console.log("?")
}else{
    console.log(maxChar);
}