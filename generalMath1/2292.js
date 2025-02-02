const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().split('\n');

let range = 1, block =1;

while(block < input){
    block += 6* range;
    range++;
}
console.log(range);