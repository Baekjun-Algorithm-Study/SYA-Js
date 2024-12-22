let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(ele => +ele);

let arr = new Array(N);

for(var i = 1; i <= M; i++){
    let [I, J, K] = input[i].split(' ').map(ele => +ele);
    for(I; I <= J; I++){
        arr[I -1] = K;
    }
}

for(var j = 0; j<arr.length; j++){
    typeof arr[j] === "undefined" ? arr[j] = 0 : arr[j];
}

console.log(arr.join(' '));