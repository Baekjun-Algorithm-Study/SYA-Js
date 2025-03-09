const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8').toString().split('\n');

for(var i = 0; i < input.length; i++){

    let [a, b] = input[i].split(' ').map(Number);

    if( a != b){
        if(a%b == 0){
            console.log("multiple");
        }else if(b%a == 0){
            console.log("factor");
        }else if(a%b !=0 || b%a != 0){
            console.log("neither");
        }
    }
}