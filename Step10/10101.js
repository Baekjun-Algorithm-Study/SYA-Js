let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let angles = input.map(num => Number(num))
let sum = angles.reduce((acc, cur) => acc + cur, 0);

if( angles.every(num => num == 60) ){
    console.log("Equilateral")
}else if( sum == 180 && new Set(angles).size === 2){
    console.log("Isosceles")
}else if(sum == 180 && new Set(angles).size === 3){
    console.log("Scalene")
}else if(sum != 180){
    console.log("Error")
}