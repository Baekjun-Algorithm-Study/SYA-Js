let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let word = input[0];
let num = input[1];

for(var i = 0; i < word.length; i++){

    let a = word[i];

    if(i+1 == num){
        console.log(a);
    }
}