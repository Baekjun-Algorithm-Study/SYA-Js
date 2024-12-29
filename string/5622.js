let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let phone = {
    2:"ABC",
    3:"DEF",
    4:"GHI",
    5:"JKL",
    6:"MNO",
    7:"PQRS",
    8:"TUV",
    9:"WXYZ",
}
let result = 0;
let word = input[0];

for(var i = 0; i < word.length; i++){
    for(var j = 2; j <= 9; j++){
        if(phone[j].includes(word[i])){
            result += j+1;
        }
    }
}

console.log(result);