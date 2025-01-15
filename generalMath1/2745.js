let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let str = input[0].split(' ')[0];
let decimal = Number(input[0].split(' ')[1]);
let result = 0;
for(var i = 0; i <str.length; i++){
    let value = parseInt(str[str.length -1 -i], decimal);
    result += value * Math.pow(decimal, i);
}
console.log(result);
