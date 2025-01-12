let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let rowsLength = input.length;

let arr = input.map(row => row.trim().split(' ').map(Number))

let max = arr[0][0];
let col = 1;
let row = 1;

for(var i = 0; i < rowsLength; i++){
    for(var j = 0; j < arr[i].length; j++){
        if(max < arr[i][j]){
            col = i+1;
            row = j+1;
            max = arr[i][j];
        }
    }
}
console.log(max);
console.log(col, row);