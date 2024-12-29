let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let caseCount = Number(input[0]);
let result = '';

for(var i = 1; i <= caseCount; i++){

    let count = Number(input[i].split(' ')[0]);
    let cases = input[i].split(' ')[1];

    for(var j = 0; j < cases.length; j++){
        for(var k = 0; k < count; k++){
            result += cases[j];
        }
    }
    result += '\n';
}
console.log(result);