let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let words;

for(var i = 1; i < input.length; i ++){
    words = input[i];
    for(var j = 0; j < words.length; j++){
        if(j == words.length -1){
            console.log(words[0]+words[j])
        }
    }
}

