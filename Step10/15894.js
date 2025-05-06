let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);

function math(n) {
    return 4 * n;
}

console.log(math(num));
