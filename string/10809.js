let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let resultArr = [];

for( var i = 97; i <= 122; i++ ){
    let str = String.fromCharCode(i);
    
    resultArr.push(input[0].indexOf(str));
    
};

console.log(resultArr.join(' '));
