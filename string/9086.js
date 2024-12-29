const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().split('\n');

let words;

for(var i = 1; i < input.length; i ++){
    words = input[i];
    for(var j = 0; j < words.length; j++){
        if(j == words.length -1){
            console.log(words[0]+words[j])
        }
    }
}

