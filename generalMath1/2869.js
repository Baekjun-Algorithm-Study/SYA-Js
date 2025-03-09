let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let[up, down, top] = input[0].split(' ').map(Number);

let day = (top - down)/(up - down);

if((top - down)%(up - down) !=0 ){
    day++;
}
console.log(parseInt(day));