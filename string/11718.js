const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().split('\n');

for(var i = 0; i < input.length; i++){
    console.log(input[i]);
}