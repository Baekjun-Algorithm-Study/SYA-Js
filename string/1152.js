let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let words = input[0].split(' ');
let num = 0;
for(var i = 0; i < words.length; i++){
    if(words[i].length != 0){
       num++;
    }
}
console.log(num);