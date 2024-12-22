let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let arr = Array.from({length : N}, (_, idx) => idx + 1);

for(var i = 1; i <= M; i++){
    let [I, J] = input[i].split(' ').map(Number);
    let temp = arr[I-1];

    arr[I-1] = arr[J-1]
    arr[J-1] = temp;
}

console.log(arr.join(' '))