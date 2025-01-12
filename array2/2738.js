let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let rows = parseInt(input[0].split(" ")[0]);
let cols = parseInt(input[0].split(" ")[1]);
 
let arrayA = new Array(rows); 
let arrayB = new Array(rows);
let arrayResult = new Array(rows);

for (let i = 0; i < rows; i++) {
    arrayA[i] = input[i + 1].split(" ").map(Number);
    arrayB[i] = input[i + 1 + rows].split(" ").map(Number);
    arrayResult[i] = [];
   for(let j = 0; j < cols; j++){
    arrayResult[i][j] = arrayA[i][j]+arrayB[i][j];
   }
}

arrayResult.forEach(ele => console.log(ele.join(' ')));