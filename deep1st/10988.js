let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let word = input[0];
let forward = "";
let backward = "";

for(var i = 0; i < word.length; i++){
    forward+=word[i];
}

for(var i = word.length-1; i >= 0; i--){
    backward+=word[i];
}

if(forward == backward){
    console.log(1);
}else{
    console.log(0);
}