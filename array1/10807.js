let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);
let list = input[1].split(' ').map(Number);
let  v = Number(input[2]);
let count = 0;

/*  방식1 - for 반복문 */
for(var i = 0; i < list.length; i++){
    if(list[i] === v){
        count++;
    }
}

console.log(count);

/*  방식2 - filter */
let result = list.filter( (ele) => ele == v).length;

console.log(result);