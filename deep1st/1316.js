let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let caseCount = Number(input[0]);
let groupWordCase = 0;

for(var i = 1; i <= caseCount; i++){
    let word = input[i];
    let testWord = [];
    let isGroupWord = true;

    for(let j = 0; j < word.length; j++){
        if(testWord.indexOf(word[j]) == -1){
            testWord.push(word[j]);
        }else if(testWord.indexOf(word[j]) !== testWord.length-1) {
            isGroupWord = false;
            break;
        }      
    }
    if(isGroupWord){
        groupWordCase += 1;
    }
}

console.log(groupWordCase);